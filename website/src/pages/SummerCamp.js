import React, { Component} from 'react';

let campPics = ['0.JPG', '1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG'];

class SummerCamp extends Component {

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="container">
                            <div className="jumbotron text-center bg-white">
                                <img src={require('../artifacts/images/PPD.PNG')} className="d-block w-100" alt="Flyer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-4 font-weight-bold">Pandemic Pindown</h1>
                            <p className="lead">
                            Our team has created Pandemic Pindown, a game designed to provide a foundation for new and returning students to work together to strategize and design.  
                            Check out the game manual for rules and information about the game, and take a look at the 3D model of the field below.
                            All teams are encouraged to participate, and there will be a celebration in mid December where teams can show off their robot designs!
                            If you have any questions about the game, email us at wlhsfrc@gmail.com or fill out the form below!
 
                            </p>
                            <a href="https://docs.google.com/document/d/1-fcQBRXG5nuFleP7kPeP-GChDnVP_9QoVOV1jPapI-w/edit?usp=sharing" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Game Manual</a>
                            <a href="https://myhub.autodesk360.com/ue2b05185/g/shares/SH919a0QTf3c32634dcf374bd9a976ccf50a?viewState=NoIgbgDAdAjCA0IDeAdEAXAngBwKZoC40ARXAZwEsBzAOzXjQEMyzd1C0BWAYwCZvuAE1zcAtACMIAdimiALAA45ciQDNOC0QE5cnTuIXiAzLlwwjaAL4gAukA" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Game Field</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-jS97pc4znUuXtKNnK8z8hpgr-TXVEEidsYRVmLhl4Za7rw/viewform" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Question Form</a>
                        </div>
                        {/*<div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm">
                                    <h1 className="display-4 font-weight-bold">Activities</h1>
                                    <hr />
                                    <ul className="text-left">
                                        <li>Rube Goldberg Machines</li>
                                        <li>3d Printed Puzzles</li>
                                        <li>Laser Cut Boxes</li>
                                        <li>Origami</li>
                                        <li>Chromotography</li>
                                        <li>LED Throwies</li>
                                        <li>Copper Tape Circuits</li>
                                        <li>Tinker CAD</li>
                                        <li>Robot Designs</li>
                                        <li>Syringe Hydraulics</li>
                                        <li>Oobleck</li>
                                        <li>Sugar Crystals</li>
                                        <li>Kahoots</li>
                                        <li>Scratch Programming</li>
                                        <li>Tower Building</li>
                                        <li>Virtual Lab Tour</li>
                                        <li>And More!</li>
                                    </ul>
                                </div>
                                <div className="col-sm mt-3 mt-md-0">
                                    <img src={require('../artifacts/images/camp/logo.png')} className="d-block w-100" alt="logo" />
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
                <hr />
                {/*<div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-6">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-4 font-weight-bold">Summer of STEAM 2019</h1>
                        </div>
                    </div>
                    <div className="col-sm-3" />
                </div>
                }
                <div className="row">
                    <div className="col-sm-8">
                        <div className="jumbotron text-center bg-white">
                            <div className="carousel slide" data-ride="carousel" id="pastPicsCarousel">
                                <ol className="carousel-indicators">
                                    {
                                        campPics.map((pic, index) => 
                                            <li key={index} data-target="#pastPicsCarousel" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`} />
                                        )
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {campPics.map((pic, index) => 
                                        <CarouselPic fileName={pic} key={pic} active={index === 0}/>
                                    )}
                                </div>
                                <a className="carousel-control-prev" href="#pastPicsCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#pastPicsCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-5 font-weight-bold">2019 Activities</h1>
                            <hr />
                            <ul className="text-left">
                                <li>3D Printing</li>
                                <li>Small Robot Driving</li>
                                <li>Go Pi Go Robot Programming</li>
                                <li>Laser Cutting</li>
                                <li>Dynamics of Paper Airplanes</li>
                                <li>Motorized Paper Airplanes</li>
                                <li>Bridge Construction</li>
                                <li>CAD</li>
                                <li>Safety Scavenger Hunt</li>
                                <li>Paper Rocket Launchers</li>
                                <li>Virtual Reality</li>
                                <li>Ozobots Programming</li>
                                <li>Drones</li>
                                <li>"Martian Landers" Challenge</li>
                                <li>School Scavenger Hunt</li>
                                <li>Group Product Pitches</li>
                                <li>Presentation Practice</li>
                            </ul>
                        </div>
                    </div>
                                    </div>*/}
            </div>
        )
    }
}

{/*class CarouselPic extends Component {
    render() {
        return (
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <img src={require(`../artifacts/images/camp/2019/${this.props.fileName}`)} className="d-block w-100" alt={this.props.fileName} />
            </div>
        );
    }
}*/}

export default SummerCamp;