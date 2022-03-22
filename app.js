require('express-async-errors');
require('dotenv').config();

const express = require('express')

//import packages
const cookieParser = require('cookie-parser')

//import middlewares
const notFoundErrorMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')

//import routes
const authRouter = require('./routes/authRoute')


//database
const connectDB = require('./db/connectdb')

const app = express()

//middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_ENV))

//Routes
app.get('/', (req, res) => res.send('Oya eyin temi'))
app.use('/api/v1/auth', authRouter)

//middlewares
app.use(errorHandlerMiddleware)
app.use(notFoundErrorMiddleware)



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