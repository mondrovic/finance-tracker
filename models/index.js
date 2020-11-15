const Bill = require("./Bill");
const Category = require("./Category");
const User = require("./User");
const Income = require("./Income");

Income.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasOne(Income, {
  foreignKey: "user_id",
});

Bill.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Category.hasMany(Bill, {
  foreignKey: "category_id",
});

Bill.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Bill, {
  foreignKey: "user_id",
});

module.exports = {
  Bill,
  Category,
  User,
  Income,
};
