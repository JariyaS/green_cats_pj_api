module.exports = (sequelize, DataTypes) => {
  const MetalPrice = sequelize.define(
    "MetalPrice",
    {
      XPD: {
        type: DataTypes.DOUBLE(16, 15),
      },
      XPT: {
        type: DataTypes.DOUBLE(16, 15),
      },
      XRH: {
        type: DataTypes.DOUBLE(16, 15),
      },
    },

    {
      underscored: true,
    }
  );

  return MetalPrice;
};
