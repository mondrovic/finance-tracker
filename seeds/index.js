const seedCategories = require('./category-seeds');
const seedBills = require('./bill-seeds');
const seedUsers = require('./user-seeds');
const seedIncome = require('./income-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedBills();
    console.log('\n----- BILLS SEEDED -----\n');

    await seedIncome();
    console.log('\n----- INCOME SEEDED -----\n');

    process.exit(0);
};

seedAll();