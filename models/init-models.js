var DataTypes = require("sequelize").DataTypes;
var _BOOK = require("./BOOK");
var _BORROW = require("./BORROW");
var _MEMBER = require("./MEMBER");

function initModels(sequelize) {
  var BOOK = _BOOK(sequelize, DataTypes);
  var BORROW = _BORROW(sequelize, DataTypes);
  var MEMBER = _MEMBER(sequelize, DataTypes);

  BORROW.belongsTo(BOOK, { as: "book_book", foreignKey: "book_book_id"});
  BOOK.hasMany(BORROW, { as: "borrows", foreignKey: "book_book_id"});
  BORROW.belongsTo(MEMBER, { as: "member_member", foreignKey: "member_member_id"});
  MEMBER.hasMany(BORROW, { as: "borrows", foreignKey: "member_member_id"});

  return {
    BOOK,
    BORROW,
    MEMBER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
