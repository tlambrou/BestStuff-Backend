'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.bulkInsert('Items', [
        { name: "Carne Asada Burrito", createdAt: new Date(), updatedAt: new Date(), id: 10000, contestId: 10000, long: -122.41945609999999, lat: 37.7604843, place_name: 'Taqueria Cancun, Mission Street, San Francisco, CA, United States', place_id: 'ChIJBxm1jjx-j4ARY3l-wL7YQss', voteCount: 124},
        { name: "Pollo con Huevos Burrito", createdAt: new Date(), updatedAt: new Date(), id: 10000, contestId: 10000, long: -122.42203589999997, lat: 37.7633976, place_name: 'El Toro Taqueria, Valencia Street, San Francisco, CA, United States', place_id: 'ChIJb-2b7yJ-j4AR8WSRWTxojEw', voteCount: 52}
    ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
