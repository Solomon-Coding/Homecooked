const router = require('express').Router();
const { Recipes, Category, Style, RecipesStyle } = require('../../models');

// The `/api/recipess` endpoint

// get all recipess
router.get('/', async (req, res) => {
  // find all recipess
  // be sure to include its associated Category and Style data
  try {
    const recipesData = await Recipes.findAll({
      include: [{ model: Category }, { model: Style }],
    });
    res.status(200).json(recipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one recipes
router.get('/:id', async (req, res) => {
  // find a single recipes by its `id`
  // be sure to include its associated Category and Style data
  try {
    const recipesData = await Recipes.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Style }],
    });

    if (!recipesData) {
      res.status(404).json({ message: 'Recipes found with that id!' });
      return;
    }

    res.status(200).json(recipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new recipes
router.post('/', async (req, res) => {
  Recipes.create(req.body)
    .then((recipes) => {
      // if there's recipes styles, we need to create pairings to bulk create in the RecipesStyle model
      if (req.body.styleIds.length) {
        const recipesStyleIdArr = req.body.styleIds.map((style_id) => {
          return {
            recipes_id: recipes.id,
            style_id,
          };
        });
        return RecipesStyle.bulkCreate(recipesStyleIdArr);
      }
      // if no recipes styles, just respond
      res.status(200).json(recipes);
    })
    .then((recipesStyleIds) => res.status(200).json(recipesStyleIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update recipes
router.put('/:id', (req, res) => {
  // update recipes data
  Recipes.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((recipes) => {
      // find all associated styles from RecipesStyle
      return RecipesStyle.findAll({ where: { recipes_id: req.params.id } });
    })
    .then((recipesStyles) => {
      // get list of current style_ids
      const recipesStyleIds = recipesStyles.map(({ style_id }) => style_id);
      // create filtered list of new style_ids
      const newRecipesStyles = req.body.styleIds
        .filter((style_id) => !recipesStyleIds.includes(style_id))
        .map((style_id) => {
          return {
            recipes_id: req.params.id,
            style_id,
          };
        });
      // figure out which ones to remove
      const recipesStylesToRemove = recipesStyles
        .filter(({ style_id }) => !req.body.styleIds.includes(style_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        RecipesStyle.destroy({ where: { id: recipesStylesToRemove } }),
        RecipesStyle.bulkCreate(newRecipesStyles),
      ]);
    })
    .then((updatedRecipesStyles) => res.json(updatedRecipesStyles))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one recipes by its `id` value
  try {
    const recipesData = await Recipes.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(recipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
