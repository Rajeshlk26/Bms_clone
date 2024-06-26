const router = require('express').Router();
const Movie = require('../models/movieModel');


router.post('/add', async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        res.send({
            success: true,
            message: 'Movie created'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }
})

router.get('/getAllMovies', async(req, res) => {
    try {
        const movies = await Movie.find()
        res.send({
            success: true,
            message: 'movies fetched sucessfully',
            data: movies
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
})

router.post('/delete', async(req, res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId)
        res.send({
            success: true,
            message: 'Movie deleted succesfully'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error
        })
        
    }
})

router.put('/update', async(req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body)
        res.send({
            success: true,
            message: 'Movie updated succesfully'
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
})

exports.router = router
