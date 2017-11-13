'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Contests', [
              { name: "Burrito", createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "Sushi", createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Vegan Food", createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Hot Dogs", createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Burger", createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Brazilian Burger", createdAt: new Date(), updatedAt: new Date(), id: 10005 },
              { name: "Taco", createdAt: new Date(), updatedAt: new Date(), id: 10006 },
              { name: "Churro", createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { name: "Cheesecake", createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { name: "Flan", createdAt: new Date(), updatedAt: new Date(), id: 10009 },
              { name: "Dosa", createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { name: "Salad", createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { name: "Wrap", createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { name: "Pie", createdAt: new Date(), updatedAt: new Date(), id: 10013 }
          ], {});

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
