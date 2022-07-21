import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Val from '../../Assets/images/valo.jpg';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';
import Table from '../Leaderboard/Table';
// IMPORT STYLING
import '../../Assets/css/Content.css';

const Valo = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated) {
            navigate('/game/valorant');
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'Please Login First',
                confirmButtonColor: '#dc3545',
            })
            navigate('/login')
        }
    }, [])
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>VALORANT</h1>
                        <p>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive.</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <img className='img-content box-shadow' src={Val} alt='img' />
                    </div>
                </div>
                <div class="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Best Region</h5>
                                <p class="card-text">Get top 500 radiant.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">God in Time</h5>
                                <p class="card-text">Get VCT master winner title.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Watch Your Head</h5>
                                <p class="card-text">Get more than 40% headshot.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Crazy Rich</h5>
                                <p class="card-text">Get all bundle skin.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bg-light'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='.#'><Button className='btn-list btn-all-game'>SEE ALL GAME ACHIEVEMENT</Button></NavLink>
                    </div>
                </div>
                <div className='row pt-4 pb-5'>
                    <div className='col text-center'>
                        <h2 className='fw-bold'>TOP <span id='top-players' className='text-players'>PLAYERS</span></h2>
                    </div>
                    <Table />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Valo