const messages = { 
  blank_space_name: 'Nome não pode estar em branco', 
  blank_space_brand: 'Marca máximo não pode estar em branco',
  blank_space_color: 'Cor não pode estar em branco',
  blank_space_year: 'Ano não pode estar em branco',
  blank_space_plate: 'Placa não pode estar em branco',
  blank_space_description: 'Descrição não pode estar em branco',
  blank_space_price: 'Preço não pode estar em branco', 
  blank_space_favorited: 'Favoritado não pode estar em branco',
  not_a_number_price: 'Preço deve ser um número',
  not_a_number_year: 'Ano deve ser um número' }

const validateCreationInputs = (newAd) => {
  const { name, brand, color, year, plate, description, price, favorited } = newAd;
  if(!name) return { message: { message: messages.blank_space_name  } };
  if(!brand) return { message: { message: messages.blank_space_brand } };
  if(!color) return { message: { message: messages.blank_space_color } };
  if(!year) return { message: { message: messages.blank_space_year } };
  if(typeof year !== 'number') return { message: { message: messages.not_a_number_year } };
  if(!plate) return { message: { message: messages.blank_space_plate } };
  if(!description) return { message: { message: messages.blank_space_description } };
  if(!price) return { message: { message: messages.blank_space_price } };
  if(typeof price !== 'number') return { message: { message: messages.not_a_number_price } };
  if (favorited === null) return { message: { message: messages.blank_space_favorited } };
  return {};
}

module.exports = { validateCreationInputs };