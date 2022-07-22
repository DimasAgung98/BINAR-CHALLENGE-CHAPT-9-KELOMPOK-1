import React, { useEffect } from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Global/Navbar';
import FormLogin from '../Components/LoginPage/FormLogin';
import Footer from '../Components/Global/Footer';
//IMPORT IMAGE
import BG from '../Assets/images/BGIF.gif';
//IMPORT GLOBAL STYLING
import '../Assets/css/LoginForm.css';

function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <div className='container-fluid bg'>
                <div className='row'>
                    <div className='col'>
                        <div className='form-container'>
                            <div className='form-content-left'>
                                <img src={BG} alt="bg" className='form-img' />
                            </div>
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;