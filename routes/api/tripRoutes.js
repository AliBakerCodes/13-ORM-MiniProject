const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

// GET all readers
// router.get('/', async (req, res) => {
//   try {
//     const locationData = await Location.findAll();
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    // req.body
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const locationData = await Location.findByPk(req.params.id, {
//       include: [{ model: Traveller, through: Trip }],
//     });

//     if (!locationData) {
//       res.status(404).json({ message: 'No Location found with that id!' });
//       return;
//     }

//     res.status(200).json(locationData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET a single reader
// router.get('/:id', async (req, res) => {
//   try {
//     const readerData = await Reader.findByPk(req.params.id, {
//       include: [{ model: LibraryCard }],
//     });

//     if (!readerData) {
//       res.status(404).json({ message: 'No reader found with that id!' });
//       return;
//     }

//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a reader
// router.post('/', async (req, res) => {
//   try {
//     const readerData = await Reader.create(req.body);
//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a reader
router.delete('/:id', async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
