// General method for validating properties against a schema
export const validateProperties = (schema, data) => {
  // Validate the data against the schema
  const result = schema.validate(data, { abortEarly: true });

  // If there are validation errors, return an object with error message, error code, and status code
  if (result.error) {
    return { message: result.error.message, errorCode: 1, statusCode: 400 };
  } 
  // If validation succeeds, return an object with error code indicating success
  else {
    return { errorCode: 0 };
  }
};