module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
  });

  Author.associate = (models) => {
    models.Author.hasMany(models.Post)
  }

  return Author;
};
