const Joi = require("joi");

const signUpSchema = Joi.object({
    email: Joi.string.email().required(),
    password: Joi.string.min(3).max(10).required()
})

let request;

const { error, value } = signUpSchema.validate(request, { abortEarly: false });

if (error) {
    res.send(error.details);
} else {

}