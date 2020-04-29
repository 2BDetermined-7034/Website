import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../artifacts/images/logo2.png';

class Navbar extends Component {
    render() {
        return (
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
                    <NavElement to="/contact">Contact</NavElement>
                    <NavElement to="/contribute">Support Us</NavElement>
                </ul>
            </nav>
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

export default Navbar;