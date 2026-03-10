const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smart Task Manager API",
      version: "1.0.0",
      description: "API documentation for Smart Task Manager backend"
    },
    servers: [
      {
        url: "https://smart-task-manaer.onrender.com"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;