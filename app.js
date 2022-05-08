// In the package.json, I added more script 

// you can start both the server and client together now
// I hope it works after you use mongoose or sth

require('express-async-errors');
require('dotenv').config();

//require express
const express = require('express')

const app = express()

//import packages
const cookieParser = require('cookie-parser')
const uploadFile = require('express-fileupload');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const cors = require('cors')
const logger = require('morgan');
const helmet = require('helmet')

//import middlewares
const notFoundErrorMiddleware = require('./middlewares/notFound')
const errorHandlerMiddleware = require('./middlewares/errorHandler')

//import routes
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const photoRouter = require('./routes/photoRoute')
const reviewRouter = require('./routes/reviewRoute')
const eventRouter = require('./routes/eventRoute')
const bookingRouter = require('./routes/bookingRoute')

//database
const connectDB = require('./db/connectdb')


app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'leksy',
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
app.use(express.static('./frontend/public'))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_ENV))
app.use(uploadFile())
app.use(logger('dev'))
//security
app.use(cors());
app.use(helmet())

//Routes
app.get('/', (req, res) => res.send('Well done bro'));
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/photo', photoRouter)
app.use('/api/v1/review', reviewRouter)
app.use('/api/v1/event', eventRouter)
app.use('/api/v1/booking', bookingRouter)

//middlewares
app.use(errorHandlerMiddleware)
app.use(notFoundErrorMiddleware)


const port = 5000 || process.env.PORT;
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