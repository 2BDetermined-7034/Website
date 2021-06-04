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
                                    <li>Laser engraved signs and water bottles</li>
                                    <li>Cost-effective 3D-printed mouthpieces for band</li>
                                    <li>Fixed the football team's water station</li>
                                    <li>PPE for teachers and other district staff</li>
                                    <li>Solar power initiatives</li>
                                    <li>Plastic recycling program</li>
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
                                    <li>A variety of camp experiences introducing various age groups to STEAM</li>
                                    <li>SOLVE Ivy Pulls</li>
                                    <li>STEM outreach in Indonesia</li>
                                    <li>West Linn Old Time Fair appearances</li>
                                    <li>Custom Lite Brite</li>
                                    <li>STEM presentations at the West Linn Public Library and elementary/middle schools</li>
                                    <li>Mentoring students and younger teams at other schools</li>
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