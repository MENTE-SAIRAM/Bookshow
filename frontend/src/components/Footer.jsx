import React from 'react';
import '../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <h3>Bookshow</h3>
        <p>Experience the magic of cinema with our convenient and secure movie ticket booking platform.</p>
        <ul className="socials">
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; <a href="#">Bookshow</a></p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li><a href="">Home</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Theaters</a></li>
            <li><a href="">News</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
