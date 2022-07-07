const messages = { blank_space: 'Campo de busca não pode ficar em branco' };

const validateQuery = (searchTerm) => {
  if(!searchTerm) {
    return { message: { message: messages.blank_space } };
  }
  return {};
}

module.exports = {
  validateQuery
}