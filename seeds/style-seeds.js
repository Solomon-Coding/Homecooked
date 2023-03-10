 const { Style } = require('../models');

 const tagData = [
   {
     tag_name: 'rock music',
   },
  {
     tag_name: 'pop music',
  },
  {
     tag_name: 'blue',
   },
  {
     tag_name: 'red',
  },
   {
     tag_name: 'green',
   },
   {
     tag_name: 'white',
   },
   {
     tag_name: 'gold',
   },
   {
     tag_name: 'pop culture',
   },
 ];

 const seedTags = () => Tag.bulkCreate(tagData);

 module.exports = seedTags;
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
