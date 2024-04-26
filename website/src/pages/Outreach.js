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
                                    <li>3D Printed bathroom passing</li>
                                    <li>West Linn Clubs' Got Talent</li>
                                    <li>West Linn High School Club Fair</li>
                                    <li>Presentations to District Board</li>
                                    <li>Cost-effective 3D-printed mouthpieces for School Band</li>
                                    <li>Fixed the football team's water station</li>
                                    <li>PPE for teachers and other district staff</li>
                                    <li>Solar power initiatives</li>
                                    <li>Plastic recycling program</li>
                                    <li>Custom water bottle engravings</li>
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
                                    <li>A variety of camp experiences introducing various age groups to STEAM (<b><a href={"https://wlhsfrc.com/community/camps"}>Camps</a></b>)</li>
                                    <ul>
                                        <li>Changing the SySTEM</li>
                                        <li>Full STEAM Ahead</li>
                                        <li>Summer of STEAM</li>
                                    </ul>
                                    <li>Monthly SOLVE Ivy Pulls at Mary S Young</li>
                                    <li>STEM Outreach in Indonesia</li>
                                    <li>Local Booths</li>
                                    <ul>
                                        <li>West Linn Old Time Fair</li>
                                        <li>West Linn Wednesday Markets</li>
                                        <li>Winter Craft Fair</li>
                                    </ul>
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