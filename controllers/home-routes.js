const router = require("express").Router();
const { Bill, Category, User } = require("../models");

// Render all Categories & Bills
router.get("/", (req, res) => {
  console.log("Welcome to /");
  res.render("main");
  return;
});

// Redirect User to Homepage upon Authentication
router.get("/login", (req, res) => {
  console.log("Welcome to /login");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Render Sign Up Page
router.get("/signup", (req, res) => {
  console.log("Welcome to /signup");
  res.render("signup");
});

module.exports = router;
