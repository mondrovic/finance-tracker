const router = require("express").Router();
const { Income } = require("../../models");

router.get("/", (req, res) => {
  Income.findAll()
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;