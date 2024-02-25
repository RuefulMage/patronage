import {Sequelize} from "sequelize";

class Student extends Sequelize.Model {
    static associate({ SchoolClass }) {
        this.belongsTo(SchoolClass);
    }
}

const attributes = {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    SchoolClassId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
};

export default (sequelize) => Student.init(attributes, { sequelize });