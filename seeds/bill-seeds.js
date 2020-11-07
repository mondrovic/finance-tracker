const { Bill } = require("../models");

const billData = [
  {
    bill_name: "Guild Mortgage",
    amount: 1200,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "Arizona Public Service",
    amount: 200,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "City Water Bill",
    amount: 90,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "Auto Loan",
    amount: 300,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "Auto Insurance",
    amount: 120,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "Student Loan",
    amount: 150,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "Cox Internet",
    amount: 90,
    category_id: 1,
    user_id: 1,
  },
  {
    bill_name: "American Express Credit Card",
    amount: 100,
    category_id: 1,
    user_id: 1,
  },
];

const seedBills = () => Bill.bulkCreate(billData);

module.exports = seedBills;
