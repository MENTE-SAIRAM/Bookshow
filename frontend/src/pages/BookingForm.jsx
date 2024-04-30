import React, { useState, useEffect } from 'react';
import Slider from '../components/Sliider'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/bookingform.css'

function BookingForm() {
  const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let day =(x)=> weekday[d.getDay()+x];
  let date =(x)=> d.getDate()+x;
  const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  let name = month[d.getMonth()];

  const [movie, setMovie] = useState(null);
  const [datecolor1, setDateColor1] = useState(); 
  const [datecolor2, setDateColor2] = useState();
  const [date1, setDate1] = useState(false);
  const [date2, setDate2] = useState(false);

  const handleDateClick1 = () => {
    setDateColor1("red");
    setDateColor2(null);
    setDate1(true);
    setDate2(false);
  }

  const handleDateClick2 = () => {
    setDateColor1(null);
    setDateColor2("red");
    setDate2(true);
    setDate1(false);
  }

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

  return (
    <div className="body">
      <Slider />
      <h1>{movie.title}</h1>
      <div className="dates">
        <div className="date-booking" style={{backgroundColor: datecolor1}} onClick={handleDateClick1}>
          <h3>{day(0)}</h3>
          <h3>{date(0)}</h3>
          <h3>{name}</h3>
        </div>
        <div className="date-booking" style={{backgroundColor: datecolor2}} onClick={handleDateClick2}>
          <h3>{day(1)}</h3>
          <h3>{date(1)}</h3>
          <h3>{name}</h3>
        </div>
      </div>
      {date1 ? (
        <><div className='theatre'>
        <div className="theatre1">
          <h1>Sri Venkateswara Complex:Tanuku</h1>
          <h3>Non-cancellable</h3>
          <div className="theatretimes">
          <Link to={`/bookingseats/${movie._id}`}>
              <p >11:00 AM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>2:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>6:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>9:15 PM</p>
              </Link>
          </div>
        </div>
      </div>
      <div className='theatre'>
          <div className="theatre1">
            <h1>Lakshmi Complex: tanuku</h1>
            <h3>Non-cancellable</h3>
            <div className="theatretimes">
              <Link to={`/bookingseats/${movie._id}`}>
              <p>11:00 AM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>2:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>6:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>9:15 PM</p>
              </Link>
            </div>
          </div>
        </div></>
        
        
      ) : (
        <><div className='theatre'>
        <div className="theatre1">
          <h1>Lakshmi Complex:Tanuku</h1>
          <h3>Non-cancellable</h3>
          <div className="theatretimes">
          <Link to={`/bookingseats/${movie._id}`}>
              <p>11:00 AM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>2:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>6:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>9:15 PM</p>
              </Link>
          </div>
        </div>
      </div>
      <div className='theatre'>
          <div className="theatre1">
            <h1>Sri Venkateswara Complex:Tanuku</h1>
            <h3>Non-cancellable</h3>
            <div className="theatretimes">
            <Link to={`/bookingseats/${movie._id}`}>
              <p>11:00 AM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>2:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>6:15 PM</p>
              </Link>
              <Link to={`/bookingseats/${movie._id}`}>
              <p>9:15 PM</p>
              </Link>
            </div>
          </div>
        </div></>
      )}
     
    </div>
  );
}

export default BookingForm;
