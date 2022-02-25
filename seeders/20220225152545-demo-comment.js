'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      description: 'It is a comment about API post',      
      user_id: 1,
      post_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'It is a comment about API post',      
      user_id: 1,
      post_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'It is a comment about API post',      
      user_id: 2,
      post_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'It is a comment about API post',      
      user_id: 2,
      post_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'It is a comment about API post',      
      user_id: 3,
      post_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'It is a comment about API post',      
      user_id: 3,
      post_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
