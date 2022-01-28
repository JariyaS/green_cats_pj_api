"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("brands", [
      {
        brand_name: "TOYOTA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        brand_name: "HONDA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        brand_name: "ISUZU",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        brand_name: "MAZDA",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }
};
