import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from '../components/Sliider';
import '../styles/moviedetails.css'

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/movies/${id}`)
        .then(response => {
            setMovie(response.data);
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });
    }, [id]);

    if (!movie) {
        return <p>Loading...</p>;
    }
     console.log(movie);
    return (
        <div className="body">
        <Slider />
        <h2>{movie.title}</h2>
        <div className='about'> 
            <img src={movie.moviephoto} className='moviephoto'/>
            <div className='movieinfo'>
            <p style={{marginTop:"50px"}}><b>Description:</b> {movie.description}</p>
            <p style={{marginTop:"10px"}}><b>Rating: </b>{movie.rating}</p>
            <p style={{marginTop:"10px"}}><b>Genre: </b>{movie.genere}</p>
            <Link to={`/booking/${movie._id}`}>
            <button >Book now</button>
            </Link>
            </div>
        </div>
        <hr/>
        <h1>Cast</h1>
        <div className='cast'>
            <div>
            <img src={movie.moviephoto} />
            <p>Pawan Kalyan</p>
            </div>
            <div>
            <img src={movie.moviephoto} />
            <p>Bhumika</p>
            </div>
            
        </div>
        <hr/>
        <h1>Crew</h1>
        <div className='cast'>
            <div>
            <img src={movie.moviephoto} />
            <p>Pawan Kalyan</p>
            </div>
            <div>
            <img src={movie.moviephoto} />
            <p>Bhumika</p>
            </div>
            
        </div>
        </div>
    );
}

export default MovieDetails;
