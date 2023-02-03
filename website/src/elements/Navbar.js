import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{fontSize: '1.5rem', backgroundColor: "#383838"}}>

                    {/*<a className="navbar-link" href='/home' style={{ textDecoration: 'none' }}>
                            <div style={{fontSize: '4.0rem', fontFamily:"Ethnocentric", color: "white"}}>
                                    <b>
                                        7034
                                    </b>
                            </div>
                    </a>*/}
                    <ul className="navbar-nav mx-auto text-center" style={{paddingRight: "50px"}}> {/*This controls the location in the navbar, used to be ml-auto*/}
                    <div className="navbar ml-auto">
                        <NavElement to="/Scout">Scout</NavElement>
                    </div>
                        <NavElement to="/Main">Main</NavElement>
                        {/*<NavElement to="/community/hourofcode">Hour Of Code</NavElement>*/}
                        

                </ul>       
            </nav>
            </Fragment>
        );
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