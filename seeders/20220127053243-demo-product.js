"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        product_name: "NA4",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342710/TR_PSA_K_202_2DCA081_8_tpe5et.jpg",
        pt_toz: 0.3,
        pd_toz: 0.14,
        rh_toz: 0.33,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "NA5",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342684/BMW-7_629_253-Ecotradegroup_1_tfv2kp.webp",
        pt_toz: 0,
        pd_toz: 0.17,
        rh_toz: 0.04,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "UE3",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342631/Fiat-46481722-Ecotradegroup_1_jjnivx.png",
        pt_toz: 0,
        pd_toz: 2.09,
        rh_toz: 0.06,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 1,
      },
      {
        product_name: "ACCORD",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342615/2246398_1_ry8dhj.jpg",
        pt_toz: 3.87,
        pd_toz: 1.94,
        rh_toz: 0.12,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 2,
      },
      {
        product_name: "9Y MD26VG4",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342600/063-png-951-_nbmaur.webp",
        pt_toz: 0.39,
        pd_toz: 0,
        rh_toz: 0.06,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 2,
      },
      {
        product_name: "1.9 BLUE POWER",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342579/1f4-png-e9e-_wj6z2o.webp",
        pt_toz: 0.49,
        pd_toz: 0.65,
        rh_toz: 0.0,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 3,
      },
      {
        product_name: "URO4",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643342217/2244299_2_wut7ex.jpg",
        pt_toz: 0.26,
        pd_toz: 0.78,
        rh_toz: 0.0,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 3,
      },
      {
        product_name: "URO5",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643341993/KAT_122_2_mchxbw.jpg",
        pt_toz: 0.26,
        pd_toz: 0.78,
        rh_toz: 0.0,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 4,
      },
      {
        product_name: "PRO UA",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643341960/Ford-1F2C_3F23_XF22_2F22-Ecotradegroup_q7kpet.webp",
        pt_toz: 0.67,
        pd_toz: 1.41,
        rh_toz: 0.01,

        created_at: new Date(),
        updated_at: new Date(),
        brand_id: 4,
      },
      {
        product_name: "S 557",
        product_img:
          "https://res.cloudinary.com/dup2jwtit/image/upload/v1643341941/BMW-223647130-Ecotradegroup_up2nk6.webp",
        pt_toz: 0.0,
        pd_toz: 0.21,
        rh_toz: 0.0,

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
