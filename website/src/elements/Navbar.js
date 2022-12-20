import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import logo from '../artifacts/images/GearLogo2022.png';
import wlhsRoboticsLogo from '../artifacts/images/wlhsRoboticsLogo.png';
import firstLogo from '../artifacts/images/firstLogo.png';


class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{fontSize: '1.5rem', backgroundColor: "#fd9f12"}}>
                        <div className="d-inline-block d-md-block">
                                <a className="navbar-brand" href="/home">
                                    <img src={logo} width="90" height="90" alt="logo"/>
                                </a>
                        </div>
                        <div className="d-inline-block d-md-block">
                                <a className="navbar-brand" href="/home">
                                    <img src={require('../artifacts/images/Team_number.png')} height="80" alt="logo"/>
                                </a>
                        </div>

                    {/*<a className="navbar-link" href='/home' style={{ textDecoration: 'none' }}>
                            <div style={{fontSize: '4.0rem', fontFamily:"Ethnocentric", color: "white"}}>
                                    <b>
                                        7034
                                    </b>
                            </div>
                    </a>*/}
                    <ul className="navbar-nav mx-auto text-center" style={{paddingRight: "200px"}}> {/*This controls the location in the navbar, used to be ml-auto*/}
                        <NavElement to="/home">Home</NavElement>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                About
                            </a>
                            <div className="dropdown-menu">
                            <ModalDropdownNavElement modalId="aboutUs">About Us</ModalDropdownNavElement>
                                <ModalDropdownNavElement modalId="aboutFirst">About FIRST</ModalDropdownNavElement>
                                <a className="dropdown-item" href="http://wlhsfrc.com/wiki/doku.php" target="_blank" rel="noopener noreferrer">Wiki</a>
                                <DropdownNavElement to="/About_Us/Competition_Results">Competition Results</DropdownNavElement>
                            </div>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                Community
                            </a>
                            <div className="dropdown-menu">
                                <DropdownNavElement to="/community/outreach">Outreach</DropdownNavElement>
                                <DropdownNavElement to="/community/camps">Camps</DropdownNavElement>
                                <DropdownNavElement to="/community/ppe">PPE Project</DropdownNavElement>
                                <DropdownNavElement to="/community/hourofcode">Hour Of Code</DropdownNavElement>
                                
                            </div>
                        </li>
                        <NavElement to="/calendar">Calendar</NavElement>
                        <NavElement to="/sponsors">Our Sponsors</NavElement>
                        <NavElement to="/SupportUs">Support Us</NavElement>
                </ul>    
                        {/*<NavElement to="#">Scouting Information</NavElement>*/}
                        
                    
                
            </nav>

                {/* Modals */}
                <Modal id="aboutUs" label="About Us" sizeModifier="modal-lg">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col">
                                <img src={wlhsRoboticsLogo} alt="teamLogo" width="100%" />
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
                            <div className="col">
                                <h5 className="text-center">Team 7034</h5>
                                <p className="text-justified">
                                    We are 2B Determined, the FIRST Robotics Competition (FRC) team as West Linn High School. This is our third year competing in FRC, although many of our members have experience
                                    in similar competitions, such as FIRST Lego League and FIRST Tech Challenge. Being a new team has many challenges, including finding sponsors and raising money, building a robot
                                    from scratch, developing and learning to use advanced control systems, and building a community presence through outreach. If you have any questions or wish to support us, please
                                    feel free to reach out on our socials (bottom of the page) or on the "Support Us" page.
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal id="aboutFirst" label="About FIRST" sizeModifier="modal-lg">
                    <div className="container-fluid">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col">
                                <img src={firstLogo} alt="firstLogo" width="100%" />
                            </div>
                            <div className="col">
                                <h5 className="text-center">FIRST Robotics</h5>
                                <p className="text-justified">
                                    <RedLetter letter="F"/>or <RedLetter letter="I"/>nspiration and <RedLetter letter="R"/>ecognition of <RedLetter letter="S"/>cience and <RedLetter letter="T"/>echnology (FIRST) is an international youth organization that operates the FIRST Robotics Competition,
                                    FIRST LEGO League, FIRST LEGO League Jr. and FIRST Tech Challenge competitions. Their motto, "to create a world where science and technology are celebrated...
                                    where young people dream of becoming science and technology heros," inspires many to compete in their tournaments every year -- including our own WLHS Robotics FRC team!
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>

             {/*   <Modal id="supportUs" label="Support Us">
                   <div className="container-fluid">
                        <div className="row">
                            <h5>Donations</h5>
                            <embed height="159px" width="100%" src="https://www.gofundme.com/f/s49nup-west-linn-robotics-expenses/widget/medium/" type="text/html" />
                        </div>
                        <hr />
                        <div className="row">
                            <h5>Prospective Sponsors or Partners</h5>
                            <p>Please reach out to our business team for further information.</p>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <input className="form-control" type="email" value="wlhsfrc@gmail.com" disabled />
                                <div className="input-group-append">
                                    <CopyToClipboard text="wlhsfrc@gmail.com">
                                        <button className="btn btn-success">
                                            <FontAwesomeIcon icon={faCopy} />
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                   </div>
                </Modal>*/}
            </Fragment>
        );
    }
}

class RedLetter extends Component {
    render() {
        return (
            <span className="text-danger font-weight-bold">{this.props.letter}</span>
        )
    }
}

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className={`modal-dialog ${this.props.sizeModifier} modal-dialog-centered`} role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h3 className="modal-title w-100" id={`${this.props.id}Label`}>{this.props.label}</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class NavElement extends Component {
    render() {
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to={this.props.to}>{this.props.children}</NavLink>
            </li>
        );
    }
}

class DropdownNavElement extends Component {
    render() {
        return (
            <NavLink className="dropdown-item" to={this.props.to}>{this.props.children}</NavLink>
        );
    }
}

class ModalNavElement extends Component {
    render() {
        return (
            <a className="nav-link" role="button" aria-expanded="false" href="#" data-toggle="modal" data-target={`#${this.props.modalId}`}>{this.props.children}</a>
        )
    }
}

class ModalDropdownNavElement extends Component {
    render() {
        return (
            <a className="dropdown-item" role="button" aria-expanded="false" href="#" data-toggle="modal" data-target={`#${this.props.modalId}`}>{this.props.children}</a>
        )
    }
}

export default Navbar;