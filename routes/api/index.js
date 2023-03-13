const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const recipesRoutes = require('./recipes-routes');
const styleRoutes = require('./style-routes');

router.use('/categories', categoryRoutes);
router.use('/recipes', recipesRoutes);
router.use('/style', styleRoutes);

module.exports = router;
