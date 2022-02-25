'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Patricia Alencar',
      email: 'patricia@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcos Cintra',
      email: 'marcos@marcos.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Felipe Cardoso',
      email: 'felipe@felipe.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sandra Gomes',
      email: 'sandra@sandra.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Paula Morais',
      email: 'paula@paula.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sergio Lopes',
      email: 'sergio@sergio.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
