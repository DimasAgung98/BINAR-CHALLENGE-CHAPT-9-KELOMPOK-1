import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import Profile from '../Components/ProfilePage/Profile';
import Footer from "../Components/Global/Footer";

function ProfilePage() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const isAuthenticated = localStorage.getItem('isAuthenticated');

    //     if (isAuthenticated) {
    //         navigate('/home');
    //     } else {
    //         Swal.fire({
    //             icon: 'info',
    //             title: 'Notification',
    //             text: 'Please Login First',
    //             confirmButtonColor: '#dc3545',
    //         })
    //         navigate('/login')
    //     }
    // }, [])
    return (
        <>
            <Navhome />
            <Profile />
            <Footer />
        </>
    )
}

export default ProfilePage