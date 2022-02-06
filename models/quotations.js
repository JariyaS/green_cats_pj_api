module.exports = (sequelize, DataTypes) => {
  const Quotation = sequelize.define(
    "Quotation",
    {
      // totalOfferPrice: {
      //   type: DataTypes.DECIMAL(10, 2),
      //   allowNull: false,
      //   validate: {
      //     notEmpty: true,
      //   },
      // },

      // date: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   validate: {
      //     notEmpty: true,
      //   },
      quotationNo: {
        type: DataTypes.INTEGER,
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Waiting",
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    }
  );
  Quotation.associate = (models) => {
    Quotation.hasMany(models.QuotationDetail, {
      foreignKey: {
        name: "quotationId",
        allowNull: false,
      },
    });

    Quotation.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
  };

  return Quotation;
};
