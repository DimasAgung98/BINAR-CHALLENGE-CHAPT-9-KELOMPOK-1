import React from 'react';
import { NavLink } from 'react-router-dom';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT LOGO IMAGES
import Cyber from '../../Assets/images/cyber.jpg';
import Gta from '../../Assets/images/gta.jpg';
import Watch from '../../Assets/images/wd.png';
import Val from '../../Assets/images/valo.jpg';
import Dot from '../../Assets/images/dota.jpg';
import Fall from '../../Assets/images/fall.jpg';
import Cs from '../../Assets/images/cs.jpg';
import Rps from '../../Assets/images/rps.png';
import apex from '../../Assets/images/apex.jpg';


function Listgame() {
    return (
        <>
            <div className='container-fluid bg-white pt-5 px-5 ptb'>
                <div className='row px-5'>
                    <div className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div className='row px-5 mb-4'>
                    <div className='col-lg-4 box'>
                        <img src={Gta} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Fall} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Dot} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <img src={Watch} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Val} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Cyber} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <img src={Cs} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Rps} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={apex} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='/home'><Button className='btn-list' color='danger'>SEE GAME DETAILS</Button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listgame