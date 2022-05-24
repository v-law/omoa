const express = require('express');

const paintingController = require('../controllers/paintingController');

const router = express.Router();

router.get('/',
paintingController.getPaintings,
  (req, res) => res.status(200).json(res.locals.paintings)
);

module.exports = router;