// const Joi = require('joi');

// const userSchema = Joi.object({
//   displayName: Joi.string().min(8).required().label('displayName'),
//   email: Joi.string().email().required().label('email'),
//   password: Joi.string().min(6).required().label('password'),
//   image: Joi.string().label('image'),
// }).messages({
//   'any.required': '{{#label}} is required',
//   'any.min': '{{#label}} length must be at least {{#limit}} characters long',
//   'any.email': '{{#label}} must be a valid email',

// });

// "\"displayName\" length must be at least 8 characters long"
// "\"email\" must be a valid email"