
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
  