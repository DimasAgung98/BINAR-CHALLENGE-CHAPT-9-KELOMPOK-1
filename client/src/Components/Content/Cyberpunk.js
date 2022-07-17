import React from 'react'
import Cyber from '../../Assets/images/cyber.jpg';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';
// IMPORT STYLING
import '../../Assets/css/Content.css';

const Cyberpunk = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>CYBERPUNK</h1>
                        <p>Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <img className='img-content box-shadow' src={Cyber} alt='img' />
                    </div>
                </div>
                <div class="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Right Back At Ya</h5>
                                <p class="card-text">Kill or incapacitate an enemy who threw a grenade at you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">True Soldier</h5>
                                <p class="card-text">Kill or incapacitate 300 enemies using ranged weapons.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Stanislavski's Method</h5>
                                <p class="card-text">Use a dialogue option related to V's life path 10 times.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Two Heads, One Bullet</h5>
                                <p class="card-text">Kill or incapacitate 2 enemies with the same sniper rifle shot.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='./list-game'><Button className='btn-list' color='warning'>SEE ALL GAME ACHIEVEMENT</Button></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cyberpunk