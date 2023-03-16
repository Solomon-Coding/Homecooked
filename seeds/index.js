const seedRecipes = require('./recipes-seeds.json');
const seedCategory = require('./category-seeds.json');
const seedStyle = require('./style-seeds.json');
const userData = require('./userData.json');
const { User, Recipes, Category, Style} = require('../models');
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  await Category.bulkCreate(seedCategory, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await Style.bulkCreate(seedStyle, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- STYLES SEEDED -----\n');

  await Recipes.bulkCreate(seedRecipes, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
};

seedAll();

// const seedRecipes = require('./recipes-seeds');
// const seedCategory = require('./category-seeds');
// const seedStyle = require('./style-seeds');
// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');

//   await seedCategory();
//   console.log('\n----- CATEGORIES SEEDED -----\n');

//   await seedStyle();
//   console.log('\n----- STYLES SEEDED -----\n');

//   await seedRecipes();
//   console.log('\n----- RECIPES SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();







