require('express-async-errors');
require('dotenv').config();

const express = require('express')

//import middlewares
const notFoundErrorMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')

//database
const connectDB = require('./db/connectdb')

const app = express()

//middlewares
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Oya eyin temi')
})

//middlewares
app.use(notFoundErrorMiddleware)
app.use(errorHandlerMiddleware)


const port = 3000 || process.env.PORT;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('Successfully connected to the database...');
        await app.listen(port);
        console.log(`Server started on port ${port}...`);
    } catch (error) {
       console.log(error); 
    }
}
start();