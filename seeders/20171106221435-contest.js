'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

          queryInterface.bulkInsert('Contests', [
              { name: "Best Burrito in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Sushi in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Vegan Food in the Bay Area", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Hot Dogs in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Burgers in Oakland", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Brazilian Burger in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Mexican food in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Churros in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Cheesecake in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Flan in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Indian in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Salad in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Wraps in SF", createdAt: new Date(), updatedAt: new Date() },
              { name: "Best Pies in SF", createdAt: new Date(), updatedAt: new Date() }
          ], {});

          queryInterface.bulkInsert('Items', [
              { name: "Best Burrito in SF", createdAt: new Date(), updatedAt: new Date(), contestId: 1 },
          ]);
      return null
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contests', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
