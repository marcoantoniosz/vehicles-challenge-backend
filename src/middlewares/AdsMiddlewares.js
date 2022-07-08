const Ad = require('../services/AdService');
const QuerySchemas = require('../schemas/QuerySchemas');
const FiltersSchemas = require('../schemas/FiltersSchemas');
const CreateSchemas = require('../schemas/InputsSchemas');

const codes = {
  ok: 200,
  not_found: 404,
  created: 201,
  updated: 201,
  bad_request: 400,
};

const messages = {
  not_found: 'Nenhum anúncio encontrado',
  created: 'Anúncio criado com sucesso',
  updated: 'Anúncio atualizado com sucesso',
  deleted: 'Anúncio deletado com sucesso',
}

const getAll = async (_req, res) => {
  const ads = await Ad.getAll();
  res.status(codes.ok).json(ads);
};

const validateId = async (req, res, next) => {
  const { id } = req.params;
  const { message } = QuerySchemas.validateId(Number(id));
  if (message) {
    return res.status(codes.bad_request).json(message);
  }
  next();
};

const notFoundId = async (req, res, next) => {
  const { id } = req.params;
  const ad = await Ad.getById(Number(id));
  if (!ad) {
    return res.status(codes.not_found).json({ message: messages.not_found });
  }
  next();
};

const getById = async (req, res) => {
  const { id } = req.params;
  const ad = await Ad.getById(Number(id));
  res.status(codes.ok).json(ad);
};

const validateQuery = async (req, res, next) => {
  const { q: searchTerm } = req.query;
  const { message } = QuerySchemas.validateQuery(searchTerm);
  if (message) {
    return res.status(codes.bad_request).json(message);
  }
  next();
};

const notFoundQuery = async (req, res, next) => {
  const { q: searchTerm } = req.query;
  const ads = await Ad.getByQuery(searchTerm);
  if (ads.length === 0) {
    return res.status(codes.not_found).json({ message: messages.not_found });
  }
  next();
};

const getQuerry = async (req, res) => {
  const { q: searchTerm } = req.query;
  const ads = await Ad.getByQuery(searchTerm);
  res.status(codes.ok).json(ads);
}

const notFoundFavorite = async (req, res, next) => {
  const { favorite } = req.query;
  const ads = await Ad.getByFavoriteStatus(favorite);
  if (ads.length === 0) {
    return res.status(codes.not_found).json({ message: messages.not_found });
  }
  next();
};

const validateFilters = async (req, res, next) => {
  const { b, c, y, min, max } = req.query;
  const { message } = FiltersSchemas.validateFilters(b, c, y, min, max);
  if (message) {
    return res.status(codes.bad_request).json(message);
  }
  next();
};

const notFoundFilters = async (req, res, next) => {
  const { b, c, y, min, max } = req.query;
  const ads = await Ad.getByFilters(b, c, y, min, max);
  if (ads.length === 0) {
    return res.status(codes.not_found).json({ message: messages.not_found });
  }
  next();
}

const getFilters = async (req, res) => {
  const { b, c, y, min, max } = req.query;
  const ads = await Ad.getByFilters(b, c, y, min, max);
  res.status(codes.ok).json(ads);
}

const getFavorite = async (req, res) => {
  const { favorite } = req.query;
  const ads = await Ad.getByFavoriteStatus(favorite);
  res.status(codes.ok).json(ads);
}

const validateInputs = async (req, res, next) => {
  const newAd = req.body;
  const { message } = CreateSchemas.validateCreationInputs(newAd);
  if (message) {
    return res.status(codes.bad_request).json(message);
  }
  next();
}

const createAd = async (req, res) => {
  const newAd = req.body;
  await Ad.createNewAd(newAd);
  res.status(codes.created).json({ message: messages.created });
}

const updateAd = async (req, res) => {
  const { id } = req.params;
  const newAd = req.body;
  await Ad.updateAd(newAd, id);
  res.status(codes.updated).json({ message: messages.updated });
}

const deleteAd = async (req, res) => {
  const { id } = req.params;
  await Ad.deleteAd(id);
  res.status(codes.ok).json({ message: messages.deleted });
}

module.exports = {
  getAll,
  validateId,
  notFoundId,
  getById,
  validateQuery,
  notFoundQuery,
  getQuerry,
  notFoundFavorite,
  getFavorite,
  validateFilters,
  notFoundFilters,
  getFilters,
  validateInputs,
  createAd,
  updateAd,
  deleteAd,
};



