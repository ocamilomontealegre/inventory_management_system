import Joi from 'joi';

// Validate addBook method
export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  picture: Joi.string().allow('')
});

// Validate id
export const idSchema = Joi.string().min(8  ).required();

