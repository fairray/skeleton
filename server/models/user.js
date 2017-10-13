const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

const { Op } = Sequelize;
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        isUnique(value, next) {
          const self = this;
          User.find({
            where: {
              email: {
                [Op.eq]: value,
              },
            },
          })
            .then((user) => {
              // reject if a different user wants to use the same email
              if (user && self.id !== user.id) {
                return next('Email already in use!');
              }
              return next();
            })
            .catch(err => next(err));
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  });

  User.beforeSave((user) => {
    if (user.changed('password')) {
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
    }
  });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
