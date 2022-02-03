module.exports = (sequelize, DataTypes) => {
  const QuotationDetail = sequelize.define(
    "QuotationDetail",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      totalOfferAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      ptPrice: {
        type: DataTypes.DOUBLE(16, 15),
      },
      pdPrice: {
        type: DataTypes.FLOAT(16, 15),
      },
      rhPrice: {
        type: DataTypes.FLOAT(16, 15),
      },
    },

    {
      underscored: true,
    }
  );
  QuotationDetail.associate = (models) => {
    QuotationDetail.belongsTo(models.Quotation, {
      foreignKey: {
        name: "quotationId",
        allowNull: false,
      },
    });

    QuotationDetail.belongsTo(models.Product, {
      foreignKey: {
        name: "productId",
        allowNull: false,
      },
    });
  };

  return QuotationDetail;
};
