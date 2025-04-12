import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return(
        <header className='header'>
            <div className='header-content'>
                <h1>Silver Creek Equestrian Education Program</h1>
                <p>Snowflake, Arizona</p>
                <nav className='nav-menu'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='dropdown'>
                            <span className='dropdown-toggle'>Programs</span>
                            <div className='dropdown-menu'>
                                <Link to="/programs#homeschool-horsemanship">Homeschool Horsemanship</Link>
                                <Link to="/programs#private-horsemanship">Private Horsemanship/Riding Lessons</Link>
                                <Link to="/programs#day-at-the-farm">Day at the Farm with Horses</Link>
                                <Link to="/programs#saddle-club">Saddle Club</Link>
                                <Link to="/programs#summer-horse-camp">Summer Horse Camp</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/what-to-bring">What to Bring</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;