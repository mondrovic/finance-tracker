const { Income } = require('../models');

const incomeData = [
    {
        amount: '4500',
        user_id: 1,

    },
    {
        amount: '4500',
        user_id: 2,
    },
    {
        amount: '4500',
        user_id: 3,
    },
    {
        amount: '4500',
        user_id: 4,
    },
];

const seedIncome = () => Income.bulkCreate(incomeData);

module.exports = seedIncome;