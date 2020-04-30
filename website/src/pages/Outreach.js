import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Outreach extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title display-4 font-weight-bold">Projects Within our School</h5>
                                <ul className="card-text text-left">
                                    <li>Unified Robotics</li>
                                    <li>Laser engraved signs</li>
                                    <li>Cost-effective 3D-printed mouthpieces for band</li>
                                    <li>Fixed the football team's water station</li>
                                </ul>
                            </div>
                            <img className="card-img-bottom pb-3 px-3 w-100" src={require('../artifacts/images/unified.jpg')} alt="Unified" />
                        </div>
                    </div>
                    <div className="col-sm mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title display-4 font-weight-bold">Spreading STEM and FIRST to our Community</h5>
                                <ul className="card-text text-left">
                                    <li>Hosting a two-week summer camp for incoming 6-9th graders</li>
                                    <li>Hosting day camps for middle schoolers on half days</li>
                                    <li>Giving four presentations at the West Linn Public Library for kids & their families</li>
                                    <li>Giving presentations at middle and elementary schools for students interested in STEM</li>
                                    <li>Mentoring students and younger teams in other schools</li>
                                    <li>Participating in Bunny Bots during the off-season</li>
                                    <li>Participating in the Girls Gnneration program</li>
                                </ul>
                            </div>
                            <img className="card-img-bottom pb-3 px-3 w-100" src={require('../artifacts/images/trillium.jpg')} alt="Trillium Presentation" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="container">
                            <div className="card h-100">
                                <div className="card-body">
                                    <TwitterTimelineEmbed sourceType="profile" screenName="Team_7034" options={{height: 600}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Outreach;