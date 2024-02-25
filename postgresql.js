import dotenv from 'dotenv';
import fs from 'fs';
import { Sequelize } from 'sequelize';

dotenv.config();

class PostgreSQL {
    async getInstance() {
        if (this._instance) return this._instance;

        this._instance = await this._connect();

        return this._instance;
    }

    async _connect() {
        const sequelize = new Sequelize(
            process.env.DATABASE_URL,
            { logging: false },
        );

        const modelFilesNames = fs
            .readdirSync('./models')
            .filter((name) => !name.includes('.test.'));

        let models = {};
        for (let i = 0; i < modelFilesNames.length; ++i) {
            const fileName = modelFilesNames[i];
            models[fileName.slice(0, -3)] = (
                await import(`./models/${fileName}`)
            ).default(sequelize);
        }

        Object.values(models).forEach((model) => {
            if (model.associate) model.associate(models);
            if (model.initHooks) model.initHooks(models);
        });

        let isConnected = false;

        const connect = async () => {
            await sequelize.authenticate();
            isConnected = true;
            console.log(
                'Connection to the database has been established successfully',
            );
        };

        const result = { ...models, sequelize };

        try {
            return isConnected ? result : await connect(), result;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default new PostgreSQL();
