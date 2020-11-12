const router = require("express").Router();

// Render Homepage
router.get("/", (req, res) => {
  console.log("Welcome to /");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("homepage");
  return;
});

// Redirect User to Dashboard upon Authentication
router.get("/login", (req, res) => {
  console.log("Welcome to /login");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Render Sign Up Page
router.get("/signup", (req, res) => {
  console.log("Welcome to /signup");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
