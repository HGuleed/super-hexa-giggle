const seedUser = require("./user-seeds");
const seedArticles = require("./article-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUser();
  console.log("--------------");
  await seedArticles();
  console.log("--------------");

  process.exit(0);
};

seedAll();
