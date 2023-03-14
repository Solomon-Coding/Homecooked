const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Meat',
  },
  {
    category_name: 'Bread',
  },
  {
    category_name: 'Soup',
  },
  {
    category_name: 'Breakfast',
  },
  {
    category_name: 'Lunch',
  },
  {
    category_name: 'Dinner',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
