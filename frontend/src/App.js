import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/Movielist';
import MovieDetails from './pages/MovieDetails';
import BookingForm from './pages/BookingForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SeatsBooking from './pages/SeatsBooking'
import BookingDetails from './pages/BookingDetails'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/bookingseats/:id" element={<SeatsBooking />} />
        <Route path="/bookingdetails/:id" element={<BookingDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
