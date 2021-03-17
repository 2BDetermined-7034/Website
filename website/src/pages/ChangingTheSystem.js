import React, { Component } from 'react';

class ChangingTheSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        };

        this.onInfoSheetLoaded = this.onInfoSheetLoaded.bind(this);
    }

    onInfoSheetLoaded({numPages}) {
        this.setState({
            numPages: numPages
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="jumbotron text-center bg-white">
                                <h1 className="display-4 font-weight-bold">Changing the SySTEM</h1>
                                <hr />
                                <a href="https://drive.google.com/file/d/1h7V3Bpy4-EWUCcadqvjQYAIL7ZCwZP0V/view" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Info Sheet</a>
                                <a href="https://docs.google.com/forms/u/4/d/1Tv3VMquuOt_Zgc7T1lQVztDmUcQCOSjJvwvzbkocNho/edit?usp=sharing" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="row">
                    <div className="col-sm-4">
                        <div className="container">
                            <div className="jumbotron text-center bg-white">
                                <img src={require('../artifacts/images/changingthesystem/flyer.jpg')} className="d-block w-100" alt="Flyer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="container">
                            <div className="jumbotron text-center bg-white">
                                <div className="carousel slide" data-ride="carousel" id="ctsCarousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#ctsCarousel" data-slide-to="0" className="active" />
                                        <li data-target="#ctsCarousel" data-slide-to="1" />
                                        <li data-target="#ctsCarousel" data-slide-to="2" />
                                        <li data-target="#ctsCarousel" data-slide-to="3" />
                                        <li data-target="#ctsCarousel" data-slide-to="4" />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../artifacts/images/changingthesystem/wedo.png')} className="d-blck w-100" alt="1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../artifacts/images/changingthesystem/rockets.jpeg')} className="d-blck w-100" alt="2" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../artifacts/images/changingthesystem/lasercutting.jpeg')} className="d-blck w-100" alt="3" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../artifacts/images/changingthesystem/dylan.jpeg')} className="d-blck w-100" alt="4" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../artifacts/images/changingthesystem/drivebase.png')} className="d-blck w-100" alt="5" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#ctsCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#ctsCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                    <span className="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default ChangingTheSystem;