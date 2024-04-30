// routes/movieRoutes.js
import express from 'express';
import { getAllMovies, createMovie,getMovieById ,deleteMovieById } from '../controller/moviecontroller.js';

const router = express.Router();

// GET all movies
router.get('/movies', getAllMovies);

// POST create a new movie
router.post('/movies', createMovie);

router.get('/movies/:id',getMovieById );
router.delete('/movies/:id',deleteMovieById);

export default router;
