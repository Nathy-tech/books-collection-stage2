const Joi = require('joi');

const validateBook = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        isbn: Joi.string().min(10).max(13).required(),
        publishedYear: Joi.number().integer().min(1000).max(9999).required()
    });
    return schema.validate(data);
};

module.exports = validateBook;

