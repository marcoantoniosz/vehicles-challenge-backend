require('dotenv').config();
const connection = require('./connection');
const DB = process.env.SQL_TABLE;

const getAll = async () => {
	const [ads] = await connection.execute(
		`SELECT * FROM ${DB};`,
	);
	return ads;
};

const getById = async (id) => {
	const [ads] = await connection.execute(
		`SELECT * FROM ${DB} WHERE ad_id = ${id};`,
	);
	return ads;
};

const getByQuery = async (query) => {
	const [ads] = await connection.execute(
		`SELECT * FROM ${DB} WHERE car_name LIKE '%${query}%' OR car_brand LIKE '%${query}%' OR car_color LIKE '%${query}%' OR car_year LIKE '%${query}%' OR car_plate LIKE '%${query}%' OR car_description LIKE '%${query}%' OR car_price LIKE '%${query}%';`,
	);
	return ads;
};


const getByFilters = async (b, c, y, min, max) => {
	const [ads] = await connection.execute(
		`SELECT * FROM ${DB} WHERE car_brand LIKE '%${b}%' AND car_color LIKE '%${c}%' AND car_year LIKE '%${y}%' AND car_price BETWEEN '${min}' AND '${max}';`,
	);
	return ads;
};


const getByFavoriteStatus = async (favorite) => {
	const [ads] = await connection.execute(
		`SELECT * FROM ${DB} WHERE favorite = ${favorite};`,
	);
	return ads;
};

const createNewAd = async (newAd) => {
	const [result] = await connection.execute(
		`INSERT INTO ${DB} (car_name, car_brand, car_color, car_year, car_plate, car_description, car_price, favorite) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
		[newAd.name, newAd.brand, newAd.color, newAd.year, newAd.plate, newAd.description, newAd.price, newAd.favorite],
	);
	return result;
};

const updateAd = async (ad, id) => {
	const [result] = await connection.execute(
		`UPDATE ${DB} SET car_name = ?, car_brand = ?, car_color = ?, car_year = ?, car_plate = ?, car_description = ?, car_price = ?, favorite = ? WHERE ad_id = ?`,
		[ad.name, ad.brand, ad.color, ad.year, ad.plate, ad.description, ad.price, ad.favorite, id],
	);
	return result;
};

const updateFavorite = async (favorite, id) => {
	const [result] = await connection.execute(
		`UPDATE ${DB} SET favorite = ? WHERE ad_id = ?`,
		[favorite, id],
	);
	return result;
};

const deleteAd = async (id) => {
	const [result] = await connection.execute(
		`DELETE FROM ${DB} WHERE ad_id = ?`,
		[id],
	);
	return result;
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
	getByFavoriteStatus,
};