const express = require('express');

const artController = require('../controllers/artController');

const router = express.Router();

router.get('/',
  artController.getExhibit,
  (req, res) => res.status(200).json(res.locals.exhibit)
);

router.get('/art',
  artController.getArt,
  (req, res) => res.status(200).json(res.locals.art)
);

router.post('/art',
  artController.addExhibit,
  artController.addArt,
  (req, res) => res.sendStatus(200)
);

module.exports = router;