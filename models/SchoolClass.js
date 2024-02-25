import {Sequelize} from "sequelize";

class SchoolClass extends Sequelize.Model {
    static associate({ Student }) {
        this.hasMany(Student, { onDelete: 'cascade' });
    }
}

const attributes = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
};

export default (sequelize) => SchoolClass.init(attributes, { sequelize });