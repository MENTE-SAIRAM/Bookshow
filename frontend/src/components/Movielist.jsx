import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/Movielist.css"
import Slider from './Sliider'

function Movielist() {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:4000/api/movies')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
    }, []);

    return (
        <div className='body'>
            <Slider /> 
            <h1>Premiere of the week</h1>
            
            <ul className='list'>
                {movies.map(movie => (
                     <Link to={`/movie/${movie._id}`}>
                    <div className='moviecard' key={movie._id}>
                       
                            <img src={movie.moviephoto} alt={movie.title} />
                            <li>{movie.title}</li>
                       
                    </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Movielist;
