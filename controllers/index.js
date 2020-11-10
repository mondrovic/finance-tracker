const router = require("express").Router();
const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

// Display 404
router.use("/*", (req, res) => {
  console.log("Welcome to 404 Page");
  res.redirect("/");
});

module.exports = router;
