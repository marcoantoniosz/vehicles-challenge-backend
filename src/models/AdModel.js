const connection = require('./connection');

const getAll = async () => {
	const [ads] = await connection.execute(
		'SELECT * FROM sql10504076.ad;',
	);
	return ads;
};

const getByQuery = async (query) => {
	const [ads] = await connection.execute(
		`SELECT * FROM sql10504076.ad WHERE car_name LIKE '%${query}%' OR car_brand LIKE '%${query}%' OR car_color LIKE '%${query}%' OR car_year LIKE '%${query}%' OR car_plate LIKE '%${query}%' OR car_description LIKE '%${query}%' OR car_price LIKE '%${query}%';`,
	);
	return ads;
};


const getByFilters = async (b, c, y, min, max) => {
	const [ads] = await connection.execute(
		`SELECT * FROM sql10504076.ad WHERE car_brand LIKE '%${b}%' AND car_color LIKE '%${c}%' AND car_year LIKE '%${y}%' AND car_price BETWEEN '${min}' AND '${max}';`,
	);
	return ads;
}


const getByFavoriteStatus = async (favorite) => {
	const [ads] = await connection.execute(
		`SELECT * FROM sql10504076.ad WHERE favorite = ${favorite};`,
	);
	return ads;
}

const createNewAd = async (newAd) => {
	const [result] = await connection.execute(
		'INSERT INTO sql10504076.ad (car_name, car_brand, car_color, car_year, car_plate, car_description, car_price, favorite) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
		[newAd.name, newAd.brand, newAd.color, newAd.year, newAd.plate, newAd.description, newAd.price, newAd.favorite],
	);
	return result;
}

const updateAd = async (ad, id) => {
	const [result] = await connection.execute(
		'UPDATE sql10504076.ad SET car_name = ?, car_brand = ?, car_color = ?, car_year = ?, car_plate = ?, car_description = ?, car_price = ?, favorite = ? WHERE ad_id = ?',
		[ad.name, ad.brand, ad.color, ad.year, ad.plate, ad.description, ad.price, ad.favorite, id],
	);
	return result;
}

const deleteAd = async (id) => {
	const [result] = await connection.execute(
		'DELETE FROM sql10504076.ad WHERE ad_id = ?',
		[id],
	);
	return result;
}

module.exports = {
	getAll,
	getByQuery,
	getByFilters,
	createNewAd,
	updateAd,
	deleteAd,
	getByFavoriteStatus,
};