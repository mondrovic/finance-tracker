const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Mortgage',
    },
    {
        category_name: 'Phone',
    },
    {
        category_name: 'Electric',
    },
    {
        category_name: 'Water',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;