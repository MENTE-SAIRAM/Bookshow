import React from 'react';
import '../styles/Nav.css'
function Navbar() {
  return (
    <div className='body'>
    <div className="top-bar">
      <div className="left-content">
        <h2 className="title">BOOkShow</h2>
        <ul className="navigation">
          <li><a  className="active" href="#">Home</a></li>
          <li><a  href="#">Movies</a></li>
          <li><a href="#">Theaters</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div className="right-content">
        <img src="./assets/images/filter.png" alt="" className="filter" />
        <img src="./assets/images/cart.png" alt="" className="cart" />
        <img src="./assets/images/help.png" alt="" className="help" />
        <div className="profile-img-box">
          <img src="./assets/images/profile.jpg" alt="" />
        </div>
        <img src="./assets/images/menu.png" alt="" className="menu" />
      </div>
    </div>
    <hr></hr>
    </div>
  );
}

export default Navbar;
