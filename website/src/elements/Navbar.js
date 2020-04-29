import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import logo from '../artifacts/images/logo2.png';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{fontSize: '1.5rem'}}>
                    <ul className="navbar-nav ml-auto text-center">
                        <NavElement to="/home">Home</NavElement>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                About
                            </a>
                            <div className="dropdown-menu">
                                <DropdownNavElement to="/about/team">About Us</DropdownNavElement>
                                <DropdownNavElement to="/about/first">About FIRST</DropdownNavElement>
                                <a className="dropdown-item" href="http://wlhsfrc.com/wiki/doku.php">Wiki</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                Community
                            </a>
                            <div className="dropdown-menu">
                                <DropdownNavElement to="/community/outreach">Outreach</DropdownNavElement>
                                <DropdownNavElement to="/community/ppe">PPE Project</DropdownNavElement>
                                <DropdownNavElement to="/community/stemchallenges">Weekly Stem Challenges</DropdownNavElement>
                            </div>
                        </li>
                        <NavElement to="/news">News</NavElement>
                    </ul>
                    <div>
                        <a className="navbar-brand mr-0" href="https://www.thebluealliance.com/team/7034">
                            <img src={logo} width="100" height="100" alt="logo"/>
                        </a>
                    </div>
                    <ul className="navbar-nav mr-auto text-center">
                        <NavElement to="/calendar">Calendar</NavElement>
                        <NavElement to="/sponsors">Our Sponsors</NavElement>
                        <ModalNavElement modalId="supportUs">Support Us</ModalNavElement>
                    </ul>
                </nav>

                {/* Modals */}
                <Modal id="supportUs" label="Support Us">
                   <div className="container-fluid">
                    <div className="row">
                        <h5>Donations</h5>
                    </div>
                    <div className="row">
                        <embed height="159px" width="100%" src="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=west-linn-robotics-expenses&image=0&coinfo=0&preview=1" type="text/html" />
                    </div>
                    <hr />
                    <div className="row">
                        <h5>Prospective Sponsors or Partners</h5>
                    </div>
                    <div className="row">
                        <p>Please reach out to our business team for further information.</p>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <input class="form-control" type="email" readonly value="wlhsfrc@gmail.com" disabled />
                            <div classname="input-group-append">
                                <CopyToClipboard text="wlhsfrc@gmail.com">
                                    <button className="btn btn-success">
                                        <FontAwesomeIcon icon={faCopy} />
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                   </div>
                </Modal>
            </Fragment>
        );
    }
}

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100" id={`${this.props.id}Label`}>{this.props.label}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
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