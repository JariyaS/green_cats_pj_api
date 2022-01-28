const bcrypt = require("bcryptjs");

("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const hashedPassword = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("Users", [
      {
        first_name: "Tracy",
        last_name: "Kemp",
        email: "tracy@gmail.com",
        phone_number: "0951234567",
        password: await bcrypt.hash("1234", 10),
        user_role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Robert",
        last_name: "Kemp",
        email: "robert@gmail.com",
        phone_number: "0951200567",
        password: await bcrypt.hash("1234", 10),
        user_role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Tan",
        last_name: "Jai",
        email: "tanjai@gmail.com",
        phone_number: "0901234567",
        password: await bcrypt.hash("1234", 10),
        user_role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Kenta",
        last_name: "Kun",
        email: "kenta@gmail.com",
        phone_number: "0910002345",
        password: await bcrypt.hash("1234", 10),
        user_role: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Harry",
        last_name: "White",
        email: "harry@gmail.com",
        phone_number: "0911112344",
        password: await bcrypt.hash("1234", 10),
        user_role: "user",
        created_at: new Date(),
        updated_at: new Date(),
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
