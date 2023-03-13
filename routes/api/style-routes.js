const router = require('express').Router();
const { Style, Recipes } = require('../../models');

// The `/api/styles` endpoint

router.get('/', async (req, res) => {
  // find all styles
  // be sure to include its associated Recipes data
  try {
    const styleData = await Style.findAll({
      include: [{ model: Recipes }],
    });
    res.status(200).json(styleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single style by its `id`
  // be sure to include its associated Recipes data
  try {
    const styleData = await Style.findByPk(req.params.id, {
      include: [{ model: Recipes }],
    });

    if (!styleData) {
      res.status(404).json({ message: 'Style found with that id!' });
      return;
    }

    res.status(200).json(styleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new style
  try {
    const styleData = await Style.create(
      req.body
    )
 
    res.status(200).json(styleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a style's name by its `id` value
  try {
    const styleData = await Style.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(styleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on style by its `id` value
  try {
    const styleData = await Style.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(styleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
