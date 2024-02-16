import Joi from 'joi'; // Import Joi for data validation

// Schema to validate the properties of a book when adding a new book
export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  picture: Joi.string().allow('') // Allow an empty string for the picture URL
});

// Schema to validate the format of an ID
export const idSchema = Joi.string().min(8).required(); // Validate ID as a string with minimum length of 8 characters