const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Recipes, Category, Style, User } = require('../models');


router.get('/', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipes.findAll()
        const recipeList = recipeData.map((recipes) =>
        recipes.get({plain: true})
        );
        console.log('HOME');
        res.render('home', {
            recipeList,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/recipes', withAuth, async (req, res) => {
  try {
      const recipeData = await Recipes.findAll()
      const recipeList = recipeData.map((recipes) =>
      recipes.get({plain: true})
      );
      console.log('RECIPES');
      res.render('recipes', {
          recipeList,
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/recipes/:id', withAuth, async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findByPk(req.params.id, {
      include: [
        {
          model: Category
        },
        {
          model: Style
        },
        {
          model: User,
        },
      ]
    });
    // console.log(dbRecipeData)
    console.log(dbRecipeData===null);
    const individualRecipe = dbRecipeData.get({ plain: true });
    res.render('viewRecipe-copy', {
      individualRecipe,
      loggedIn: req.session.loggedIn
  });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


// // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the gallery
//     try {
//       const dbGalleryData = await Gallery.findByPk(req.params.id, {
//         include: [
//           {
//             model: Painting,
//             attributes: [
//               'id',
//               'title',
//               'artist',
//               'exhibition_date',
//               'filename',
//               'description',
//             ],
//           },
//         ],
//       });
//       const gallery = dbGalleryData.get({ plain: true });
//       res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the painting
//     try {
//       const dbPaintingData = await Painting.findByPk(req.params.id);

//       const painting = dbPaintingData.get({ plain: true });

//       res.render('painting', { painting, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

