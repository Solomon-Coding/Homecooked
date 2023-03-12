const seedRecipes = require('./recipes-seeds');
const seedCategory = require('./category-seeds');
const seedStyle = require('./style-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedStyle();
  console.log('\n----- STYLES SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
};

seedAll();
