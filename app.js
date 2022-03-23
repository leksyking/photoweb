require('express-async-errors');
require('dotenv').config();

//require express
const express = require('express')

const app = express()

//import packages
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

//import middlewares
const notFoundErrorMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')

//import routes
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')


//database
const connectDB = require('./db/connectdb')


app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'eksy',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: 'sessions'
    }),
}))
app.use(passport.initialize());
app.use(passport.session());

//google strategy
require('./passport/google')

//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_ENV))


//Routes
app.get('/', (req, res) => res.send('Well done bro'));
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)

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