const db = require('../models/artModels');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `StudentController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    message: { err: `Error occurred in StudentController.${method}. Check server logs for more details.` }
  };
};

const artController = {};

artController.getExhibit =  async (req, res, next) => {
  const text = 'SELECT * FROM exhibit;';

  await db.query(text)
    .then ((response) => {
      // console.log('res', response.rows); 
      res.locals.exhibit = response.rows;
      return next();
    }).catch (err => {
      return next(createErr({
        method: 'getExhibit',
        type: 'when recieving exhibit data from the request',
        err: err,
      }));
    });
};

artController.getArt = async (req, res, next) => {
  const {id} = req.query;
  const text = `SELECT
   "primaryImage" AS "src", 
   "title",
   "culture", 
   "period", 
   "artistDisplayName",
   "artistDisplayBio",
   "medium",
   "dimensions",
   "objectID"
   FROM "public"."art"
   WHERE "art"."_id"=${parseInt(id)};`

  await db.query(text)
    .then ((response) => {
      // console.log('res', response.rows); 
      res.locals.art = response.rows[0];
      return next();
    }).catch (err => {
      return next(createErr({
        method: 'getArt',
        type: 'when recieving art data from the request',
        err: err,
      }));
    });
};

artController.addExhibit = async (req, res, next) => {
  console.log('req.body', req.body);
  const body = req.body;
  const text = `UPDATE exhibit SET art_id=${body[0].objectID} 
                WHERE exhibit._id=${body[1]+1}`;
  
  console.log(text);

  await db.query(text)
    .then (() => {
      return next();
    }).catch (err => {
      return next(createErr({
        method: 'addExhibit',
        type: 'when updating exhibit data',
        err: err,
      }));
    });
};

artController.addArt = async (req, res, next) => {
  console.log('req.body', req.body);
  const body = req.body[0];
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
      return next(createErr({
        method: 'addArt',
        type: 'when updating art data',
        err: err,
      }));
    });
};

module.exports = artController;