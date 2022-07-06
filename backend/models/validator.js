const Joi = require("joi");
const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false })
const mySchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(3).max(10).required(),
    confirmPassword: Joi.ref("password"),
    address: {
        state: Joi.string().length(2).required(true)
    },
    DOB: Joi.date().greater(new Date("2012-01-01")).required(true),
    refered: Joi.boolean().required(),
    hobbies: Joi.array().items(Joi.string),
    canOnlyBetrue: Joi.boolean().valid(true)
})


exports.validateMine = validator(mySchema);

// let request;

// const { error, value } = signUpSchema.validate(request, { abortEarly: false });

// if (error) {
//     res.send(error.details);
// } else {

// }