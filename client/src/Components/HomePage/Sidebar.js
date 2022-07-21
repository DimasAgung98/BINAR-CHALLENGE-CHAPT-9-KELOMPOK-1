import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Assets/css/Sidebar.css';

function Sidebar() {
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-12 list-menu'>
                        <NavLink to='/home'><li>HOME</li></NavLink>
                        <NavLink to='/game/rock-paper-scissors'><li>RPS</li></NavLink>
                        <NavLink to='/game/gta'><li>GTA V</li></NavLink>
                        <NavLink to='/game/fall-guys'><li>FALLGUYS</li></NavLink>
                        <NavLink to='/game/dota'><li>DOTA 2</li></NavLink>
                        <NavLink to='/game/watch-dogs'><li>WATCHDOGS</li></NavLink>
                        <NavLink to='/game/valorant'><li>VALORANT</li></NavLink>
                        <NavLink to='/game/cyber-punk'><li>CYBERPUNK</li></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar