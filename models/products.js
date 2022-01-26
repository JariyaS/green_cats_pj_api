module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      productImg: {
        type: DataTypes.STRING,
      },
      PtToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
      PdToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
      RhToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
      productPrice: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },

    {
      underscored: true,
    }
  );
  Product.associate = (models) => {
    Product.hasMany(models.QuotationDetail, {
      foreignKey: {
        name: "productId",
        allowNull: false,
      },
    });
  };

  return Product;
};
