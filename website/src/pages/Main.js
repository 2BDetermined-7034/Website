import React, { Component } from 'react';

class Main extends Component {
    render() {
        return(
    <div className="container">
            <div className="row text-center">
                <div>
                    <h1><u>Setup:</u></h1>
                    <h><b>Scout Initials</b></h>
                    <div className="col-sm">
                        <form>
                            <label>
                                <input type="text" name="name"/>
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
                                <input type="text" name="name"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            {/*Make dropdown menu for Robot -> R1, R2, etc. and have it be attached to name */}
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
                            <option value={"7"}>Pew Pew Robot!</option>
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
                                    <input type="text" name="name"/>
                                </label>
                            </form>
                    </div>
                </div>
            </div>
            {/*Starting Position dropdown menu -> wall, mid, loading*/}
            <div className="row text-center">
                <div>
                <h><b>Starting Position</b></h>
                    <div className="p-2">
                        <select>
                            <option value={"1"}>Wall</option>
                            <option value={"2"}>Mid</option>
                            <option value={"3"}>Loading</option>
                            <option value={"4"}>Lee Loo</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div>
                    <h1><u>Auto:</u></h1>
                    <h><b>Mobility</b></h>
                    <div className="col-sm">
                        <input type="checkbox" className="form-check-input m-2 h-5
                        w-9 cursor-pointer appearance-none rounded-full bg-gray-300
                        bg-contain bg-no-repeat align-top shadow-sm focus:outline-none
                        " role="switch" id="Mobility"></input>
                    </div>
                </div>
            </div>
            {/*Auto stuff here
            & the Teleop stuff as well, why is the 3 x 9 extremely complicated to do 
            even though it's really easy in mind, I love computer coding (☆´∀｀☆) P.S. Кодирование отстой
            */}

            <div className="row text-center">
                <div>
                    <h1><u>Post Match</u></h1>
                    <h><b>Comments</b></h>
                    <div className="col-sm">
                        <textarea style={{width: "300px"}}></textarea>
                    </div>
                </div>
            </div>
            {/*Number of alliance links(number tinker)*/}
            <div className="row text-center">
                <div>
                    <h><b>Upload Button</b></h>
                    <div className="col-sm">
                        <button></button>{/*Not sure how the export button will work, 
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