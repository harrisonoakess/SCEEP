import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Silver Creek Equestrian Education Program</h1>
        <p>Snowflake, Arizona</p>
        <nav className="nav-menu">
          <ul>
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle">Home</Link>
            </li>

            {/* Programs Dropdown */}
            <li className="dropdown">
              <span className="dropdown-toggle">Programs</span>
              <div className="dropdown-menu">
                <Link to="/programs#day-at-the-farm">Day at the Farm</Link>
                <Link to="/programs#private-horsemanship">Private Lessons</Link>
                <Link to="/programs#summer-horse-camp">Summer Horse Camp</Link>
                <Link to="/programs#pony-pals">After School Pony Pals</Link>
                <Link to="/programs#dirt-road-riders">Dirt Road Riders</Link>
                <Link to="/programs#equine-apprenticeship">Equine Apprenticeship</Link>
              </div>
            </li>

            {/* Homeschool Programs Dropdown */}
            <li className="dropdown">
              <span className="dropdown-toggle">Homeschool Activities</span>
              <div className="dropdown-menu">
                {/* <Link to="/homeschool-programs#homeschool-horse-class">Homeschool Horse Class</Link> */}
                <Link to="/homeschool-programs#homeschool-pony-pals">Homeschool Pony Pals</Link>
              </div>
            </li>

            {/* About Dropdown */}
            <li className="dropdown">
              <span className="dropdown-toggle">About Us</span>
              <div className="dropdown-menu">
                <Link to="/about#meet-the-team">Meet the Team</Link>
                <Link to="/about#meet-the-horses">Meet the Horses</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
