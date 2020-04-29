import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import facebook from '../artifacts/images/icons/facebook.png';
import instagram from '../artifacts/images/icons/instagram.png';
import twitter from '../artifacts/images/icons/twitter.png';
import youtube from '../artifacts/images/icons/youtube.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row text-center pt-3 pb-1" style={{display: 'block'}}>
                        <SocialBadge image={youtube} name="youtube" link="https://www.youtube.com/channel/UC-brjJyCdV9xLKw3mFo6X6Q"/>
                        <SocialBadge image={instagram} name="instagram" link="https://www.instagram.com/team_7034/?hl=en" />
                        <SocialBadge image={facebook} name="facebook" link="https://www.facebook.com/west.linn.3" />
                        <SocialBadge image={twitter} name="twitter" link="https://twitter.com/Team_7034" />
                    </div>
                    <div className="row">
                        <p className="text-center" style={{width: '100%'}}>
                            Built with <FontAwesomeIcon icon={faHeart} /> by FRC Team 7034
                            <br />
                            Copyright &copy; 2020 FRC Team 7034
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

class SocialBadge extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <img src={this.props.image} alt={this.props.name} width="48" height="48" className="ml-1 mr-1" />
            </a>
        );
    }
}

export default Footer;