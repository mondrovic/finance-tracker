const router = require("express").Router();
const { Bill } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Bill.findAll({
      where: {
      }
    })
      .then(dbBillData => {
        const bills = dbBillData.map((bill) => bill.get({ plain: true }));
        
        res.render("all-bills-admin", {
          layout: "dashboard",
          bills
        });
      })
      .catch(err => {
        console.log(err);
        
      });
  });

  router.get("/new", withAuth, (req, res) => {
    res.render("new-bill", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Bill.findByPk(req.params.id)
      .then(dbBillData => {
        if (dbBillData) {
          const bill = dbBillData.get({ plain: true });
          
          res.render("edit-bill", {
            layout: "dashboard",
            bill
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;
