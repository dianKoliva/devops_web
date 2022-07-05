const express = require('express');
const app = express();
const port = 4355;
const bodyParser = require("body-parser");
const cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


//docker initialisation
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        tittle: "My apis",
        version: "1.0.0"
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
    console.log(`running on port ${port}`);
})