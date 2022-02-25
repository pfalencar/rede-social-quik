'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      title: 'How to make an API',
      description: 'It is a post to teachs how to build an API',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make an API 2',
      description: 'It is a post to teachs how to build an API',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make an API 3',
      description: 'It is a post to teachs how to build an API',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make an API 4',
      description: 'It is a post to teachs how to build an API',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make an API 5',
      description: 'It is a post to teachs how to build an API',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make an API 6',
      description: 'It is a post to teachs how to build an API',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
