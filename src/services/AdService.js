const Ad = require('../models/AdModel');

const serialize = (ad) => ({
	id: ad.ad_id,
	name: ad.car_name,
	brand: ad.car_brand,
	color: ad.car_color,
	year: ad.car_year,
	plate: ad.car_plate,
	description: ad.car_description,
	price: ad.car_price,
	favorited: ad.favorite,
});

const getAll = async () => {
  const ads = await Ad.getAll();
  return ads.map(serialize);
};

const getById = async (id) => {
  const ads = await Ad.getById(id);
  return ads.map(serialize);
};

const getByQuery = async (query) => {
  const ads = await Ad.getByQuery(query);
  return ads.map(serialize);
};

const getByFilters = async (b, c, y, min, max) => {
  const ads = await Ad.getByFilters(b, c, y, min, max);
  return ads.map(serialize);
};

const getByFavoriteStatus = async (favorite) => {
  const ads = await Ad.getByFavoriteStatus(favorite);
  return ads.map(serialize);
};

const createNewAd = async (newAd) => {
  await Ad.createNewAd(newAd);
};

const updateAd = async (ad, id) => {
  await Ad.updateAd(ad, id);
};

const updateFavorite = async (favorite, id) => {
  await Ad.updateFavorite(favorite, id);
};

const deleteAd = async (id) => {
  await Ad.deleteAd(id);
};

module.exports = { 
  getAll,
  getByQuery,
  getById,
  getByFilters,
  createNewAd,
  updateAd,
  updateFavorite,
  deleteAd,
  getByFavoriteStatus
 };
