const router = require("express").Router();

const userRoutes = require("./user-routes");
const categoryRoutes = require("./category-routes");
const billRoutes = require("./bill-routes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/bills", billRoutes);

module.exports = router;
