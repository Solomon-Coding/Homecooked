const { Recipes } = require('../models');

const recipesData = [
  {
    name: 'Burger',
    author:'Ummmm', 
    instructions:'Cokka da meata',
    ingredients: 'Sass',
    category_id: 2,
    style_id: 1,
  },
  {
    name: 'Burger',
    author:'Ummmm', 
    instructions:'Cokka da meata',
    ingredients: 'Sass',
    category_id: 2,
    style_id: 1,
  },
  {
    name: 'Burger',
    author:'Ummmm', 
    instructions:'Cokka da meata',
    ingredients: 'Sass',
    category_id: 6,
    style_id: 2,
  },
];

const seedRecipes = () => Recipes.bulkCreate(recipesData);

module.exports = seedRecipes;
