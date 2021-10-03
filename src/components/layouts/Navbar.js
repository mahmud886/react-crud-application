import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <NavLink className='navbar-brand' to='/'>
                        React Crud Application
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarNavAltMarkup'>
                        <div className='navbar-nav'>
                            <NavLink className='nav-link' to='/'>
                                Home
                            </NavLink>
                            <NavLink className='nav-link' to='/about'>
                                About
                            </NavLink>
                            <NavLink className='nav-link' to='contact'>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <Link className='btn btn-outline-light' to='/users/add'>
                            Add User
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
