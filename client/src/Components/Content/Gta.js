import React from 'react'
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT IMAGES
import GTA5 from '../../Assets/images/gta.jpg';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';
// IMPORT STYLING
import '../../Assets/css/Content.css'

const Gta = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>GRAND THEFT AUTO V</h1>
                        <p>Grand Theft Auto V evolves nearly every mechanic that was in the previous Grand Theft Auto games. As far as driving goes, the vehicles have been greatly improved, with Rockstar running more complex physics on them, such as making some cars hold to the ground slightly better.</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <img className='img-content box-shadow' src={GTA5} alt='img' />
                    </div>
                </div>
                <div class="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Best Car Customization</h5>
                                <p class="card-text">Collect car rating point.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Stick Up Kid</h5>
                                <p class="card-text">GTA Online: Hold up all 20 Stores.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Mastermind</h5>
                                <p class="card-text">GTA Online: Earn 25 platinum medals across Heist Setups and Finales.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 card-size">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Red Mist</h5>
                                <p class="card-text">Complete all Rapmages.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='./list-game'><Button className='btn-list btn-all-game'>SEE ALL GAME ACHIEVEMENT</Button></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gta