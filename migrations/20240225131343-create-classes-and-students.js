'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
          'SchoolClasses',
          {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            name: {
              type: Sequelize.TEXT,
              allowNull: false,
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            updatedAt: {
              type: Sequelize.DATE,
            },
          },
          { transaction },
      );

      await queryInterface.createTable(
          'Students',
          {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            fullName: {
              type: Sequelize.TEXT,
              allowNull: false,
            },
            SchoolClassId: {
              type: Sequelize.INTEGER,
              allowNull: false,
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
            },
            updatedAt: {
              type: Sequelize.DATE,
            },
          },
          {transaction}
      );
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('Students', { transaction });
      await queryInterface.dropTable('SchoolClasses', { transaction });
    });
  }
};
