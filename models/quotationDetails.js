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
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
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
