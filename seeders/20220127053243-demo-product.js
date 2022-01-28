"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        product_name: "NA4",
        product_img:
          "https://www.ecotradegroup.com/cache/product_large/uploads/products/4035/Fiat-46481722-Ecotradegroup_1.png",
        pt_toz: 0.3,
        pd_toz: 0.14,
        rh_toz: 0.33,
        product_price: 6115.64,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "NA5",
        product_img:
          "https://www.ecotradegroup.com/cache/product_large/uploads/products/4101/Fiat-55210499-Ecotradegropup_1.png",
        pt_toz: 0,
        pd_toz: 0.17,
        rh_toz: 0.04,
        product_price: 1027.94,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "UE3",
        product_img: "",
        pt_toz: 0,
        pd_toz: 2.09,
        rh_toz: 0.06,
        product_price: 5208.784,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "ACCORD",
        product_img: "",
        pt_toz: 3.87,
        pd_toz: 1.94,
        rh_toz: 0.12,
        product_price: 9855.48,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 2,
      },
      {
        product_name: "9Y MD26VG4",
        product_img: "",
        pt_toz: 0.39,
        pd_toz: 0,
        rh_toz: 0.06,
        product_price: 1477.08,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 2,
      },
      {
        product_name: "1.9 BLUE POWER",
        product_img: "",
        pt_toz: 0.49,
        pd_toz: 0.65,
        rh_toz: 0.0,
        product_price: 1829.4,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 3,
      },
      {
        product_name: "URO4",
        product_img: "",
        pt_toz: 0.26,
        pd_toz: 0.78,
        rh_toz: 0.0,
        product_price: 1899.92,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 3,
      },
      {
        product_name: "URO4",
        product_img: "",
        pt_toz: 0.26,
        pd_toz: 0.78,
        rh_toz: 0.0,
        product_price: 1899.92,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 4,
      },
      {
        product_name: "PRO UA",
        product_img: "",
        pt_toz: 0.67,
        pd_toz: 1.41,
        rh_toz: 0.01,
        product_price: 5277.86,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 4,
      },
      {
        product_name: "S 557",
        product_img: "",
        pt_toz: 0.0,
        pd_toz: 0.21,
        rh_toz: 0.0,
        product_price: 480.95,
        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 4,
      },
    ]);
  },

  //   down: async (queryInterface, Sequelize) => {
  //     /**
  //      * Add commands to revert seed here.
  //      *
  //      * Example:
  //      * await queryInterface.bulkDelete('People', null, {});
  //      */
  //   }
};
