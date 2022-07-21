import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../Assets/images/logoteamone.png';
//IMPORT ICONS
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
//IMPORT GLOBAL STYLING
import '../../Assets/css/NavHome.css';

function Navhome() {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.clear('isAuthenticated');
        Swal.fire({
            icon: 'success',
            title: 'LOG OUT',
            text: 'LOG OUT SUCCESSFULLY',
            confirmButtonColor: '#dc3545',
        })
        navigate('/')
    }

    return (
        <>
            <section>
                <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
                    <div className='container-fluid'>
                        <div className='col-3'>
                            {/* logo navbar */}
                            <a href='/home' className='navbar-brand'>
                                <img className='logo' src={NavbarLogo} alt="logo" />
                                <h4 className='navbar-text'>TEAM<span> ONE</span></h4>
                            </a>
                        </div>
                        <div className='col-6'>
                        </div>
                        {/* button logout */}
                        <div className='col-3'>
                            <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
                                <ul class="navbar-nav">
                                    <li class="nav-item mx-3">
                                        <NavLink class="nav-link" to="/home/profile"><FaUserAlt className='icon-profile' /> PROFILE</NavLink>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <NavLink class="nav-link" to="/" onClick={handleLogout}><FaSignOutAlt className='icon-logout' /> LOGOUT</NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* hamburger button */}
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navhome