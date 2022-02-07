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
      ptToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
      pdToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
      rhToz: {
        type: DataTypes.DECIMAL(5, 2),
      },
    },

    {
      underscored: true,
    }
  );
  Product.associate = (models) => {
    // Product.hasMany(models.QuotationDetail, {
    //   foreignKey: {
    //     name: "productId",
    //     allowNull: false,
    //   },
    // });
    Product.belongsTo(models.Brand, {
      foreignKey: {
        name: "brandId",
        allowNull: false,
      },
    });
  };

  return Product;
};
