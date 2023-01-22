import Joi, { object } from "joi";
export const registrationValidation = (data) => {
  const Schema = object({
    name: Joi.string().min(6).max(150).required(),
    email: Joi.string().min(10).max(255).email().required(),
    password: Joi.string().min(6).max(255).required(),
  });
};
return Schema.validate(data);
// validation registration

// validation login

// logic to verify our token
