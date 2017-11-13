'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Items', [
        { id: 10000, name: "Carne Asada Burrito", long: -122.41945609999999, lat: 37.7604843, place_id: "ChIJBxm1jjx-j4ARY3l-wL7YQss", place_name: "Taqueria Cancun, Mission Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(),  contestId: 10000, voteCount: 124},
        { id: 10001, name: "Pollo con Huevos Burrito", long: -122.42203589999997, lat: 37.7633976, place_id: "ChIJb-2b7yJ-j4AR8WSRWTxojEw", place_name: "El Toro Taqueria, Valencia Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10000, voteCount: 52},
        { id: 10002, name: "Super Veggie Burrito", long: -122.41969879999999, lat: 37.7629642, place_id: "ChIJieYDSSN-j4ARwyYWgkRNy5A", place_name: "La Oaxaqueña, Mission Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10000, voteCount: 52},

        { id: 10003, name: "Pot Belly Burger", long: -122.41655259999999, lat: 37.7724812, place_id: "ChIJx_nSZSd-j4ARs_kyfr_Keu8", place_name: "Big Chef Tom's Belly Burgers, Howard Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 39},
        { id: 10004, name: "Cazadores Burger", long: -122.41884219999997, lat: 37.7727901, place_id: "ChIJ557UHJ6AhYAR_zj0jhd9fQI", place_name: "Taqueria Cazadores, Mission Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 173},
        { id: 10005, name: "Southwest Burger", long: -122.40402899999998, lat: 37.786957, place_id: "ChIJLVgtY4iAhYARoO_UxqNv5Bw", place_name: "Super Duper Burgers, Market Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 41},
        { id: 10006, name: "California Burger", long: -122.39423199999999, lat: 37.796107, place_id: "ChIJVVWVjGaAhYARH_4JjCTVBz8", place_name: "Gott's Roadside, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 11},
        { id: 10007, name: "Brazilian Burger", long: -122.26678570000001, lat: 37.8725081, place_id: "ChIJMcOsP55-hYARHTQro0WwlGY", place_name: "Brazil Cafe, University Avenue, Berkeley, CA, United Statess", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 100},
        { id: 10008, name: "American Burger", long: -122.40743370000001, lat: 37.787291, place_id: "ChIJJQ1ZKY-AhYARKCrOAKx7EZA", place_name: "Burger Bar, Geary Street, San Francisco, CA, United States", createdAt: new Date(), updatedAt: new Date(), contestId: 10004, voteCount: 73},




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
