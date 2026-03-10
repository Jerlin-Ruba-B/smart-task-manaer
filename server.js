const express = require('express')
const app = express()
const connectDb = require('./src/config/db')
const authRoutes = require('./src/routes/authRoute')
const protect = require('./src/middleware/authMiddleware')
const cors = require('cors')
const taskRoutes = require("./src/routes/taskRoute");
const errorHandler = require("./src/middleware/errorMiddleware");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");


const dotenv = require("dotenv")
dotenv.config()


app.use(express.json())
app.use(cors("*"))

connectDb()


app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

app.use(errorHandler);