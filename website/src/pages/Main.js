import React, { Component } from 'react';
import PurpleOFF from '../artifacts/images/Box/PurpleOFF.png';
import PurpleON from '../artifacts/images/Box/PurpleON.png';
import ConeOFF from '../artifacts/images/Box/ConeOFF.png';
import ConeON from '../artifacts/images/Box/ConeON.png';
import Empty from '../artifacts/images/Box/Blank.png';
import "./Scoring.css";
let counter = 0; 

class Main extends Component {
    render() {
        return(


    <div className="container">
        <div className="card">
            <div className="row text-center">
                <div>
                    <h1><u>Setup:</u></h1>
                    <h><b>Scout Initials</b></h>
                    <div className="col-sm">
                        <form>
                            <label>
                                <input class="textbox" type="text" name="name"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div>
                <h><b>Match Number</b></h>
                    <div className="col-sm">
                        <form>
                            <label>
                                <input class="textbox" type="text" name="name"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div>
                <h><b>Robot</b></h>
                    <div className="p-2">
                        <select>
                            <option value={"1"}>R1</option>
                            <option value={"2"}>R2</option>
                            <option value={"3"}>R3</option>
                            <option value={"4"}>B1</option>
                            <option value={"5"}>B2</option>
                            <option value={"6"}>B3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div>
                    <h><b>Team Number</b></h>
                        <div className="col-sm">
                            <form>
                                <label>
                                    <input class="textbox" type="text" name="name"/>
                                </label>
                            </form>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div>
                <h><b>Starting Position</b></h>
                    <div className="p-2">
                        <select>
                            <option value={"1"}>Wall</option>
                            <option value={"2"}>Mid</option>
                            <option value={"3"}>Loading</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="row text-center">
                <div className="col-l">
                    <h1><u>Auto:</u></h1>
                    <h><b>Mobility</b></h>
                    <div className="col-sm">
                        <input class="Checkmark" type="checkbox"/>
                    </div>
                </div>
            </div>
            <div>
                <div class="row text-center">
                    <div className="col-l">
                    <h><b>Score</b></h> {/* Button Ticker*/}
                    <div className="col-sm flex flex-row items-center">
                        <button class="minus" type="button">
                            -
                        </button>
                            <h2 class="counter">
                                0
                            </h2>
                        <button class="plus" type="button">
                            +
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <h><b>Dock, Dock, Engage</b></h>
                    <div className="p-2 text-center">
                        <select>
                            <option value={"1"}>None</option>
                            <option value={"2"}>Dock</option>
                            <option value={"3"}>Engage</option>
                        </select>
                    </div>
            </div>
        </div>            {/*Why is the 3 x 9 extremely complicated to do 
            even though it's really easy in mind, I love computer coding (☆´∀｀☆) P.S. Кодирование отстой
            */}
        <div className="card">
            <div className="row text-center">
                <div className="col-l">
                <h1><u>Teleop</u></h1>
                <h><b>Cycle over Charging Station</b></h>
                <div className="col-sm">
                        <input class="Checkmark" type="checkbox"/>
                </div>
            </div>
            </div>
        </div>
        <div className="card">
            <div className="row text-center">
                <div>
                    <h1><u>Endgame</u></h1>
                    <h><b>Dock, Dock and Engage</b></h>
                    <div className="p-2">
                        <select>
                            <option value={"1"}>None</option>
                            <option value={"2"}>Dock</option>
                            <option value={"3"}>Engage</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="row text-center">
                <div>
                    <h1><u>Post Match</u></h1>
                    <h><b>Comments</b></h>
                    <div className="col-sm">
                        <textarea class="COMMENT" style={{width: "300px"}}></textarea>
                    </div>
                </div>
            </div>
        </div>
        
            {/*Number of alliance links(number tinker)*/}
            <div className="row text-center">
                <div>
                    <h><b>Upload Button</b></h>
                    <div className="col-sm">
                        <p></p>{/*Not sure how the export button will work, 
                        so I will leave it up to you. ﾍ( ^0^)ﾉ┏┓ ┏┓ 
                        ....Make sure you leave the export process in another file Thanks!*/}
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default Main;