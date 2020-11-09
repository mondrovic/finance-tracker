const withAuth = (req, res, next) => {
  // if no session id, redirect to login
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
