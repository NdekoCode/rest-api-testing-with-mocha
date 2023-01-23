import Joi from "joi";

// validation registration
export const registerValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().min(6).max(150).required(),
    email: Joi.string().min(10).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return Schema.validate(data);
};

// validation login
export const loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().email().required().min(10).max(255),
    password: Joi.string().required().min(6).max(255),
  });
  return Schema.validate(data);
};
// logic to verify our token
