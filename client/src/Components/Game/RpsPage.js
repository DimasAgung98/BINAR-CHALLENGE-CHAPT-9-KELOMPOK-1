import React from 'react'

import batu from '../../Assets/images/batu.png'
import gunting from '../../Assets/images/gunting.png'
import kertas from '../../Assets/images/kertas.png'
import refresh from '../../Assets/images/refresh.png'

import '../../Assets/css/RpsGame.css'

function RpsPage() {
    //Array Game Condition
    const CONDITION_TABLE = [
        ["D", "P", "C"],
        ["C", "D", "P"],
        ["P", "C", "D"]
    ]
    // "D" = Draw, "P" = Player 1 win, "C" = Com win

    //Player can't Input Again After Choose The Option (using arrow function)
    const disableInput = () => {
        document.querySelectorAll("input").forEach(input => {
            input.setAttribute("disabled", "disabled")
        })
    }

    //Show Game Result
    const showResult = result => {
        const statusResult = {
            "D": ["Result : Draw!", "draw"],
            "P": [`Result : Player win`, "player-win"],
            "C": ["Result : Com win!", "com-win"]
        }

        console.log(statusResult[result][0]);
        if (result === 'P') {
            let point = document.getElementById('scorepoint').innerText;
            point++;
            document.getElementById('scorepoint').innerText = (point);
        }
        document.getElementById("versus").style.display = "none"; //Hide Versus on Browser
        document.getElementById(statusResult[result][1]).style.display = "block"
        disableInput()
    }

    console.log("Play Binar Traditional Game");
    console.log("---------------------------");

    //Player 1 & COM CHOICE
    const getChoice = player_choice => {
        const PLAYER_CHOICE = ["rock", "paper", "scissors"];
        const COM_CHOICE = ["com-rock", "com-paper", "com-scissors"];

        //TEXT CONSOLE PLAYER CHOOSE RESULT
        console.log(`Player Choose :`, PLAYER_CHOICE[player_choice]);

        //TEXT CONSOLE COM RANDOM RESULT
        const com_choice = Math.floor(Math.random() * 3); //Untuk merandom pilihan com
        console.log("COM Choose :", COM_CHOICE[com_choice]);

        //DISPLAY PLAYER CHOISE WITH BORDER
        document.getElementById(PLAYER_CHOICE[player_choice]).classList.add("border-pick");
        document.getElementById(COM_CHOICE[com_choice]).classList.add("border-pick");
        document.querySelectorAll("input").forEach(player_choice => {
            player_choice.classList.remove("player");
        })

        //GAME RESULT
        const result = CONDITION_TABLE[player_choice][com_choice];
        //To Show The Result 
        showResult(result);
    }

    //RESET GAME (using arrow function)
    const resetGame = () => {
        console.log("Reset Game");
        console.log("---------------------------");

        document.querySelectorAll("input").forEach(input => {
            input.removeAttribute("disabled");
        })

        document.getElementById("versus").style.display = "block";
        document.getElementById("player-win").style.display = "none";
        document.getElementById("com-win").style.display = "none";
        document.getElementById("draw").style.display = "none";

        document.querySelectorAll("input").forEach(choice => {
            choice.classList.add("player");
        })

        document.querySelectorAll(".figure").forEach(figure => {
            figure.classList.remove("border-pick");
        })
    }
    return (
        <>
            <div className='row pt-2'>
                <div>
                    <h3>Your Point : <span id='scorepoint'>0</span> </h3>
                </div>
            </div>
            <div className='row'>
                <div className='container-fluid min-vw-100 pt-5'>
                    {/* <!-- Main Section --> */}
                    <div className="row justify-content-center mt-3">
                        {/* <!-- player Section --> */}
                        <div className="col-lg-3">
                            <h1 id="username" className="player-title">PLAYER 1</h1>
                            <div className="row justify-content-center">
                                <figure className="col-lg-7 pt-4 figure" id="rock">
                                    <input type="image" src={batu} alt='rock' className="player" onClick={() => getChoice(0)} />
                                </figure>
                                <figure className="col-lg-7 pt-4 figure" id="paper">
                                    <input type="image" src={gunting} alt='paper' className="player" onClick={() => getChoice(1)} />
                                </figure>
                                <figure className="col-lg-7 pt-4 figure" id="scissors">
                                    <input type="image" src={kertas} alt='scissors' className="player" onClick={() => getChoice(2)} />
                                </figure>
                            </div>
                        </div>
                        {/* <!-- Status Section --> */}
                        <div className="col-lg-2 mx-3 text-center">
                            <div className="row justify-content-center">
                                <div className="col versus" id="versus">
                                    <p>
                                        VS
                                    </p>
                                </div>
                                <div className="col win-player" id="player-win">
                                    <p id="playerwin">
                                        {/* <!-- username --> */}
                                    </p>
                                    <p>
                                        WIN
                                    </p>
                                </div>
                                <div className="col win-com" id="com-win">
                                    <p>
                                        COM
                                    </p>
                                    <p>
                                        WIN
                                    </p>
                                </div>
                                <div className="col draw" id="draw">
                                    <p>
                                        DRAW
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- COM Section --> */}
                        <div className="col-3">
                            <h1 className="com-title">COM</h1>
                            <div className="row justify-content-center">
                                <figure className="col-lg-7 pt-4 figure" id="com-rock">
                                    <img src={batu} alt="com-rock" />
                                </figure>
                                <figure className="col-lg-7 pt-4 figure" id="com-paper">
                                    <img src={gunting} alt="com-paper" />
                                </figure>
                                <figure className="col-lg-7 pt-4 figure" id="com-scissors">
                                    <img src={kertas} alt="com-scissors" />
                                </figure>
                            </div>
                        </div>
                        <div className="row text-center">
                            <figure onClick={() => resetGame()}>
                                <img src={refresh} alt='' className="reset-button" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RpsPage