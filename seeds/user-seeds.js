const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "alesmonde0",
    email: "nwestnedge0@cbc.ca",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "jwilloughway1",
    email: "rmebes1@sogou.com",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "iboddam2",
    email: "cstoneman2@last.fm",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "dstanmer3",
    email: "ihellier3@goo.ne.jp",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "djiri4",
    email: "gmidgley4@weather.com",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "msprague5",
    email: "larnout5@imdb.com",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "mpergens6",
    email: "hnapleton6@feedburner.com",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "tpenniell7",
    email: "kperigo7@china.com.cn",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "msabbins8",
    email: "lmongain8@google.ru",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
  {
    username: "jmacarthur9",
    email: "bsteen9@epa.gov",
    password: "$2b$11$5X8mBDqMwjjTiOa8G3eVT.b.yfhHXcBDeDwhoFHu8XyMf/y0fDaTS",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
