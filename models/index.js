const User = require('./User');
const Style = require('./Style');
const Recipes = require('./Recipes');
const Category = require('./Category');


// Every recipe falls within a category
Recipes.belongsTo(Category,
    {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
    }
  );
  
  // Every category can refer to many recipe's
  Category.hasMany(Recipes,
    {
      foreignKey: 'category_id',
    }
  );
  
// Every recipe falls within a particular food style
  Recipes.belongsTo(Style,
    {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
    }
  );

// Every style can refer to many recipe's
Style.hasMany(Recipes,
    {
      foreignKey: 'category_id',
    }
  );

module.exports = {
    User,
    Recipes,
    Category,
    Style,
  };
