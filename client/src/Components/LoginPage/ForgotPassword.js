import React, { useState } from 'react';
import axios from 'axios';

import Footer from './../Global/Footer';
import Navbar from '../../Components/Global/Navbar';
import Swal from 'sweetalert2';

import '../../Assets/css/Forgot.css'

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }


    const submitEmail = () => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'ALERT',
                text: 'INPUT YOUR EMAIL FIRST',
                confirmButtonColor: '#dc3545',
            })

        } else {
            const result = axios.put('http://localhost:4000/forgot-password', { email: email })
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS',
                text: 'CHECK YOUR EMAIL',
                confirmButtonColor: '#dc3545',
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className="container size bg-light min-vw-100">
                <div className='row text-center pt-5'>
                    <h3>Forgot Password</h3>
                    <p>This page to reset your password via email</p>
                </div>
                <div className='container bg-light align-items-center justify-content-center'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-black">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your email' value={email} onChange={changeEmail} />
                        </div>
                        <button onClick={submitEmail} type="submit" class="btn btn-danger">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ForgotPassword