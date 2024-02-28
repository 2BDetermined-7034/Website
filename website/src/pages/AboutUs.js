import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import wlhsRoboticsLogo from '../artifacts/images/wlhsRoboticsLogo.png';
import firstLogo from '../artifacts/images/firstLogo.png';

class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid col-sm-10">
                <div className="row">
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row flex-wrap align-items-center">
                                <div className="col-sm-5">
                                    <div className="ml-4">
                                        <img src={wlhsRoboticsLogo} alt="teamLogo" height="200" />
                                    </div>
                                        <div className="input-group pb-2">
                                            <input className="form-control" type="email" value="wlhsfrc@gmail.com" disabled />
                                            <div className="input-group-append">
                                                <CopyToClipboard text="wlhsfrc@gmail.com">
                                                    <button className="btn btn-success">
                                                        <FontAwesomeIcon icon={faCopy} />
                                                    </button>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                        <input className="form-control" type="text" value="5464 West A Street West Linn, Oregon 97068" disabled />
                                    </div>
                                        <div className="col-sm-7">
                                        <h5 className="text-center">Team 7034</h5>
                                        <p className="text-justified">
                                        We are 2B Determined, the FIRST Robotics Competition (FRC) Team at West Linn High School, 
                                        in the Pacific Northwest District. This is our 6th year competing in FRC. We aim to spread 
                                        the principles of FIRST across our community, increasing STEM accessibility for those of 
                                        all ages and all backgrounds. If you have any questions, please reach out to our email 
                                        wlhsfrc@gmail.com. 

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
            </div>
                
                        <div className="card h-100">
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col">
                                    <div className="align-items-center">
                                        <img src={firstLogo} alt="firstLogo" width="300" height="200" />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <h5 className="text-center">FIRST Robotics</h5>
                                    <p className="text-justified">
                                        <RedLetter letter="F"/>or <RedLetter letter="I"/>nspiration and <RedLetter letter="R"/>ecognition of <RedLetter letter="S"/>cience and <RedLetter letter="T"/>echnology (FIRST) is an international youth organization that operates the FIRST Robotics Competition,
                                        For Inspiration and Recognition of Science and Technology (FIRST) is an international
                                        youth organization that operates the FIRST Robotics Competition, FIRST LEGO League, 
                                        FIRST LEGO League Jr. and FIRST Tech Challenge competitions. Their motto, "to create 
                                        a world where science and technology are celebrated... where young people dream of 
                                        becoming science and technology heroes," inspires many to compete in their tournaments 
                                        every year—including our own WLHS Robotics FRC team!
</p>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
class RedLetter extends Component {
    render() {
        return (
            <span className="text-danger font-weight-bold">{this.props.letter}</span>
        )
    }
}

export default AboutUs;