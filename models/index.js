const Bill = require('./Bill');
const Category = require('./Category');
const User = require('./User');

Bill.belongsTo(Category);

Category.hasMany(Bill);

Bill.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });



module.exports = {
    Bill,
    Category,
    User
}