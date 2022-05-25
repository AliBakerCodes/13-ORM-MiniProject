const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // req.body
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location, through: Trip }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No Traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // CREATE a card
// router.post('/', async (req, res) => {
//   try {
//     const locationData = await LibraryCard.create({
//       reader_id: req.body.reader_id,
//     });
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a card
// router.delete('/:id', async (req, res) => {
//   try {
//     const libraryCardData = await LibraryCard.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!libraryCardData) {
//       res.status(404).json({ message: 'No library card found with that id!' });
//       return;
//     }

//     res.status(200).json(libraryCardData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
