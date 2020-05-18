import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import facebook from '../artifacts/images/icons/facebook.png';
import instagram from '../artifacts/images/icons/instagram.png';
import twitter from '../artifacts/images/icons/twitter.png';
import youtube from '../artifacts/images/icons/youtube.png';
import blueAlliance from '../artifacts/images/icons/blueAlliance.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row text-center pt-3 pb-2" style={{display: 'block'}}>
                        <SocialBadge image={youtube} name="youtube" link="https://www.youtube.com/channel/UC-brjJyCdV9xLKw3mFo6X6Q"/>
                        <SocialBadge image={instagram} name="instagram" link="https://www.instagram.com/team_7034/?hl=en" />
                        <SocialBadge image={facebook} name="facebook" link="https://www.facebook.com/west.linn.3" />
                        <SocialBadge image={twitter} name="twitter" link="https://twitter.com/Team_7034" />
                        <SocialBadge image={blueAlliance} name="blue alliance" link="https://www.thebluealliance.com/team/7034" />
                    </div>
                    <div className="row pb-2">
                        <div className="col" />
                        <div className="col input-group">
                            <input className="form-control" type="email" value="wlhsfrc@gmail.com" disabled />
                            <div className="input-group-append">
                                <CopyToClipboard text="wlhsfrc@gmail.com">
                                    <button className="btn btn-success">
                                        <FontAwesomeIcon icon={faCopy} />
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                    <div className="row">
                        <p className="text-center w-100">
                            5464 West A Street West Linn, Oregon 97068
                        </p>
                    </div>
                    <div className="row">
                        <p className="text-center w-100">
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