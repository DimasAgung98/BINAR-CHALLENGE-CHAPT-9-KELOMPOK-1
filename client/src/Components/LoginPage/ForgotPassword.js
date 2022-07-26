import React from 'react'
import Footer from './../Global/Footer'
import Navbar from '../../Components/Global/Navbar'

import '../../Assets/css/Forgot.css'

function ForgotPassword() {
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
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your email' />
                        </div>
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ForgotPassword