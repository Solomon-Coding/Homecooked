const { Style } = require('../models');

const styleData = [
  {
    style_name: 'American',
  },
  {
    style_name: 'French',
  },
  {
    style_name: 'Italian',
  },
  {
    style_name: 'Mexican',
  },
];

const seedStyle = () => Style.bulkCreate(styleData);

module.exports = seedStyle;
