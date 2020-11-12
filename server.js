const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const arg = process.argv[2];
const version = "1.0.0";
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "this is a random secret 08u-jvfij-",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Initialize Application
init = () => {
  app.use(session(sess));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");

  // Initialize Routes
  app.use(routes);

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });
};

// Display Argument Data
if (arg === "-h") {
  console.log(`
        Usage: node server.js [ -h | -v | -l | -a ]
        or: npm start
        
        [options]
        -h          Display this message.
        -v          Show version.
        -l          Show license info.
        -a          What is Finance Tracker?
    `);
  process.exit();
} else if (arg === "-v") {
  console.log("Finance Tracker Version: " + version);
  process.exit();
} else if (arg === "-l") {
  console.log("Licensed under the Creative Commons CC0 Public Domain.");
  process.exit();
} else if (arg === "-a") {
  console.log(
    "Full stack Financial application utilizing ORM with Sequelize and adhering to the Model-View-Controller paradigm."
  );
  process.exit();
} else {
  init();
}
