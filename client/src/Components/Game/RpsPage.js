import React from 'react'

import batu from '../../Assets/images/batu.png'
import gunting from '../../Assets/images/gunting.png'
import kertas from '../../Assets/images/kertas.png'
import refresh from '../../Assets/images/refresh.png'

import '../../Assets/css/RpsGame.css'

function RpsPage() {
    return (
        <>
            <div className='row'>
                <div className='container-fluid min-vw-100 min-vh-100 pt-5'>
                    {/* <!-- Main Section --> */}
                    <div class="row justify-content-center mt-3">
                        {/* <!-- player Section --> */}
                        <div class="col-lg-3">
                            <h1 id="username" class="player-title">PLAYER 1</h1>
                            <div class="row justify-content-center">
                                <figure class="col-lg-7 pt-4 figure" id="rock">
                                    <input type="image" src={batu} alt='rock' class="player" onclick="getChoice(0)" />
                                </figure>
                                <figure class="col-lg-7 pt-4 figure" id="paper">
                                    <input type="image" src={gunting} alt='paper' class="player" onclick="
                            getChoice(1)"/>
                                </figure>
                                <figure class="col-lg-7 pt-4 figure" id="scissors">
                                    <input type="image" src={kertas} alt='scissors' class="player" onclick="
                            getChoice(2)"/>
                                </figure>
                            </div>
                        </div>
                        {/* <!-- Status Section --> */}
                        <div class="col-lg-2 mx-3 text-center">
                            <div class="row justify-content-center">
                                <div class="col versus" id="versus">
                                    <p>
                                        VS
                                    </p>
                                </div>
                                <div class="col win-player" id="player-win">
                                    <p id="playerwin">
                                        {/* <!-- username --> */}
                                    </p>
                                    <p>
                                        WIN
                                    </p>
                                </div>
                                <div class="col win-com" id="com-win">
                                    <p>
                                        COM
                                    </p>
                                    <p>
                                        WIN
                                    </p>
                                </div>
                                <div class="col draw" id="draw">
                                    <p>
                                        DRAW
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- COM Section --> */}
                        <div class="col-3">
                            <h1 class="com-title">COM</h1>
                            <div class="row justify-content-center">
                                <figure class="col-lg-7 pt-4 figure" id="com-rock">
                                    <img src={batu} alt="com-rock" />
                                </figure>
                                <figure class="col-lg-7 pt-4 figure" id="com-paper">
                                    <img src={gunting} alt="com-paper" />
                                </figure>
                                <figure class="col-lg-7 pt-4 figure" id="com-scissors">
                                    <img src={kertas} alt="com-scissors" />
                                </figure>
                            </div>
                        </div>
                        <div class="row text-center">
                            <figure onclick="resetGame()">
                                <img src={refresh} alt='' class="reset-button" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RpsPage