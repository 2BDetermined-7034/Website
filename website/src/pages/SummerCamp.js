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
                                <img src={require('../artifacts/images/camp/flyer.png')} className="d-block w-100" alt="Flyer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-4 font-weight-bold">Summer of STEAM 2020</h1>
                            <p className="lead">
                                In light of the global pandemic, 2B Determined has developed a new online format for our annual Summer of STEAM camp. Summer of STEAM is a week long summer experience hosted by designed for incoming 8th and 9th graders. Curriculum is developed and taught by current 2B Determined members, and is focused on Science, Technology, Engineering, Art, and Mathematics education. Materials are provided, but a device with an active internet connection is required, as well as access to <a href="https://zoom.us/">zoom</a>. 
                            </p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7yabd4tJxHhAVSxqLJutYncVEtobkcxGL5gVc3B3Vafhbvw/viewform" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Register</a>
                            <a href="http://wlhsfrc.com/api/assets/Consent%20Form%20-%20Summer%20of%20STEAM%202020.pdf" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Consent Form</a>
                        </div>
                        <div className="jumbotron text-center bg-white">
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
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-6">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-4 font-weight-bold">Summer of STEAM 2019</h1>
                        </div>
                    </div>
                    <div className="col-sm-3" />
                </div>
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
                </div>
            </div>
        )
    }
}

class CarouselPic extends Component {
    render() {
        return (
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <img src={require(`../artifacts/images/camp/2019/${this.props.fileName}`)} className="d-block w-100" alt={this.props.fileName} />
            </div>
        );
    }
}

export default SummerCamp;