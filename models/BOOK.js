const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BOOK', {
    book_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'TITLE'
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'AUTHOR'
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'STOCK'
    }
  }, {
    sequelize,
    tableName: 'book',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BOOK_ID" },
        ]
      },
    ]
  });
};
