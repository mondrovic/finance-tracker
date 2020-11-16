const router = require("express").Router();
const { Bill, Category, User, Income } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Bill.findAll({
    where: {
      // Pass Session ID
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: User,
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Income,
            attributes: ["amount"],
            as: "income",
          },
        ],
      },
    ],
  })
    .then((dbBillData) => {
      const bills = dbBillData.map((bill) => bill.get({ plain: true }));
      const username = req.session.username;

      res.render("dashboard", {
        bills,
        username,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/new", withAuth, (req, res) => {
  Category.findAll({})
    .then((dbBillData) => {
      const categories = dbBillData.map((bill) => bill.get({ plain: true }));

      const username = req.session.username;
      res.render("new-bill", {
        categories,
        username,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/new-category", withAuth, (req, res) => {
  Category.findAll({})
    .then((dbBillData) => {
      const categories = dbBillData.map((bill) => bill.get({ plain: true }));

      const username = req.session.username;
      res.render("new-category", {
        categories,
        username,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/edit-income", withAuth, (req, res) => {
  Income.findAll({})
    .then((dbIncomeData) => {
      const income = dbIncomeData.map((income) => income.get({ plain: true }));

      const user_id = req.session.user_id;
      res.render("edit-income", {
        income,
        user_id,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Bill.findByPk(req.params.id)
    .then((dbBillData) => {
      if (dbBillData) {
        const bill = dbBillData.get({ plain: true });
        const username = req.session.username;
        res.render("edit-bill", {
          layout: "main",
          username,
          bill,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
