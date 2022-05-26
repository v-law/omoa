const db = require('../models/artModels');

const artController = {};

artController.getExhibit =  async (req, res, next) => {
  // write code here
  const text = 'SELECT * FROM exhibit;';

  await db.query(text)
    .then ((response) => {
      // console.log('res', response.rows); 
      res.locals.exhibit = response.rows;
      return next();
    }).catch (err => {
      return next(err);
    });
};

artController.getArt = async (req, res, next) => {
  // write code here
  const {id} = req.query;
  const text = `SELECT 
   art.primaryImage AS src, 
   art.title, 
   art.artist, 
   art.culture, 
   art.period, 
   art.artistDisplayName,
   art.artistDisplayBio,
   art.medium,
   art.dimensions,
   art.objectID
   FROM exhibit LEFT JOIN art ON exhibit.art_id = art._id 
   WHERE exhibit._id=${id};`;

  await db.query(text)
    .then ((response) => {
      // console.log('res', response.rows); 
      res.locals.art = response.rows[0];
      return next();
    }).catch (err => {
      return next(err);
    });
};

artController.addExhibit = async (req, res, next) => {
  // write code here
  console.log('req.body', req.body);
  const body = req.body;
  const text = `UPDATE exhibit SET art_id=${body[0].objectID} 
                WHERE exhibit._id=${body[1]+1}`;
  
  console.log(text);

  await db.query(text)
    .then (() => {
      return next();
    }).catch (err => {
      return next(err);
    });
};

artController.addArt = async (req, res, next) => {
  // write code here
  console.log('req.body', req.body);
  const body = req.body[0];
//   INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
// VALUES (value1, value2, value3,...valueN);
  const text = `INSERT INTO art(primaryImage, title, artist, 
    culture, period, artistDisplayName, 
    artistDisplayBio, medium, dimensions, objectID) 
    VALUES ('${body.primaryImage}', '${body.title}', '${body.artist}', 
    '${body.culture}', '${body.period}', '${body.artistDisplayName}', 
    '${body.artistDisplayBio}', '${body.medium}', '${body.dimensions}', 
    ${body.objectID});`;

  await db.query(text)
    .then (() => {
      return next();
    }).catch (err => {
      return next(err);
    });
};

module.exports = artController;