const router = require('express').Router();
const Recipes = require('../../models/Recipes');
const withAuth = require('../../utils/auth');

router.get('/', withAuth ,async (req, res) => {
  const recipesData = await Recipes.findAll().catch((err) => { 
      res.json(err);
    });
      const recipes = recipesData.map((recipe) => recipe.get({ plain: true }));
      res.render('recipes', { recipes });
    });


// route to create/add a recipes using async/await
router.post('/', async (req, res) => {
  try { 
    const recipesData = await Recipes.create({
    name: req.body.name,
    author: req.body.author,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    category_id: req.body.category_id,
    style_id: req.body.style_id,
  });
  // if the recipes is successfully created, the new response will be returned as json
  res.status(200).json(recipesData)
} catch (err) {
  res.status(400).json(err);
}
});





module.exports = router;
