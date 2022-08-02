const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BORROW', {
    borrow_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'book',
        key: 'BOOK_ID'
      },
      field: 'BOOK_BOOK_ID'
    },
    member_member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'member',
        key: 'MEMBER_ID'
      },
      field: 'MEMBER_MEMBER_ID'
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'TIME'
    },
    returned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'RETURNED'
    }
  }, {
    sequelize,
    tableName: 'borrow',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BORROW_ID" },
        ]
      },
      {
        name: "BORROW_BOOK",
        using: "BTREE",
        fields: [
          { name: "BOOK_BOOK_ID" },
        ]
      },
      {
        name: "BORROW_MEMBER",
        using: "BTREE",
        fields: [
          { name: "MEMBER_MEMBER_ID" },
        ]
      },
    ]
  });
};
