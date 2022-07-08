const Mw = require('../middlewares/AdsMiddlewares');
const express = require('express');
const router = express.Router();

router.get('/ads', Mw.getAll);

router.get('/ads/id', Mw.validateId, Mw.notFoundId, Mw.getById);

router.get('/ads/search', Mw.validateQuery, Mw.notFoundQuery, Mw.getQuerry);

router.get('/ads/filters', Mw.validateFilters, Mw.notFoundFilters, Mw.getFilters);

router.get('/ads/favorite', Mw.notFoundFavorite, Mw.getFavorite);

router.post('/ads', Mw.validateInputs, Mw.createAd);

router.put('/ads/:id', Mw.validateInputs, Mw.updateAd);

router.delete('/ads/:id', Mw.deleteAd);


module.exports = {
  router,
}

