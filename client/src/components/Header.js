import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <button type="button" className="site-title-link" onClick={scrollToTop}>
            Silver Creek Equestrian Education Program
          </button>
        </h1>
        <p>Snowflake, Arizona</p>

        <nav className="nav-menu">
          <ul>
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle" onClick={scrollToTop}>
                Home
              </Link>
            </li>

            {/* Programs Dropdown */}
            <li className="dropdown">
              <Link to="/programs" className="dropdown-toggle" onClick={scrollToTop}>
                Programs
              </Link>
              <div className="dropdown-menu">
                <Link to="/programs#day-at-the-farm">Day at the Farm</Link>
                <Link to="/programs#private-horsemanship">Private Lessons</Link>
                <Link to="/programs#summer-horse-camp">Summer Horse Camp</Link>
                <Link to="/programs#pony-pals">After School Pony Pals</Link>
                <Link to="/programs#dirt-road-riders">Dirt Road Riders</Link>
                <Link to="/programs#equine-apprenticeship">Equine Apprenticeship</Link>

                {/* Farm School on Programs page */}
                <Link to="/programs#farm-school">Farm School Classes</Link>
                <Link to="/programs#farm-centered-preschool">Little Farmers Preschool</Link>
              </div>
            </li>

            {/* Homeschool Activities Dropdown */}
            <li className="dropdown">
              <Link to="/homeschool-programs" className="dropdown-toggle" onClick={scrollToTop}>
                Homeschool Activities
              </Link>
              <div className="dropdown-menu">
                {/* Farm School on Homeschool page */}
                <Link to="/homeschool-programs#farm-school">Farm School Classes</Link>
                {/* <Link to="/homeschool-programs#homeschool-horse-class">Homeschool Horse Class</Link> */}
                <Link to="/homeschool-programs#homeschool-pony-pals">Homeschool Pony Pals</Link>
              </div>
            </li>

            {/* About Dropdown */}
            <li className="dropdown">
              <Link to="/about" className="dropdown-toggle" onClick={scrollToTop}>
                About Us
              </Link>
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
