'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Items', [
        { id: 10000, name: "Carne Asada Burrito", long: -122.41945609999999, lat: 37.7604843, place_id: "ChIJBxm1jjx-j4ARY3l-wL7YQss", place_name: "Taqueria Cancun, Mission Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(),  contestId: 10000, voteCount: 124},
        { id: 10001, name: "Pollo con Huevos Burrito", long: -122.42203589999997, lat: 37.7633976, place_id: "ChIJb-2b7yJ-j4AR8WSRWTxojEw", place_name: "El Toro Taqueria, Valencia Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10000, voteCount: 52},
        { id: 10002, name: "Super Veggie Burrito", long: -122.41969879999999, lat: 37.7629642, place_id: "ChIJieYDSSN-j4ARwyYWgkRNy5A", place_name: "La Oaxaqueña, Mission Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10000, voteCount: 36}

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
