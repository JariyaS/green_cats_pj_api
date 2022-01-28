module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      brandName: {
        type: DataTypes.STRING,
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
  Brand.associate = (models) => {
    Brand.hasMany(models.Product, {
      foreignKey: {
        name: "brandId",
        allowNull: false,
      },
    });
  };

  return Brand;
};
