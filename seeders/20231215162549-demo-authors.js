'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert('Authors', [{
                name: 'Ashley Galvin',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Authors', [{
                name: 'Patrick Beach',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Authors', [{
                name: 'MacKenzie Miller',
                createdAt: new Date(),
                updatedAt: new Date()
            }]),
        ])
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};