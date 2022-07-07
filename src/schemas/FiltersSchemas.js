const messages = {
  blank_space_brand: 'Marca máximo não pode estar em branco',
  blank_space_color: 'Cor não pode estar em branco',
  blank_space_year: 'Ano não pode estar em branco', 
  blank_space_min: 'Valor mínimo não pode estar em branco', 
  blank_space_max: 'Valor máximo não pode estar em branco' };


const validateFilters = (b, c, y, min, max) => {
  if(!b) return { message: { message: messages.blank_space_brand } };
  if(!c) return { message: { message: messages.blank_space_color } };
  if(!y) return { message: { message: messages.blank_space_year } };
  if(!min) return { message: { message: messages.blank_space_min  } };
  if(!max) return { message: { message: messages.blank_space_max } };
  return {};
};

module.exports = { validateFilters };