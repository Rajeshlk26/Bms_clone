const express=require('express')
require('dotenv').config()

const app=express();
const dbConifg = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const showRoutes = require('./routes/showRoutes')

//Middlewares
//middleware to parse the json body(data recieved from client like name, mail, pass)
app.use(express.json())
//middleware for prefix '/api/users'
app.use('/api/users', userRoutes.router) 
app.use('/api/movies', movieRoutes.router)
app.use('/api/theatre', theatreRoutes.router)
app.use('/api/shows', showRoutes.router)
 

app.listen(8080, () => {
    console.log("Server has started")
})