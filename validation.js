const Joi = require("@hapi/joi");

module.exports.registerValidation = (data) => {
  const schema = {
    username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
  };

  return Joi.validate(data, schema);
};
