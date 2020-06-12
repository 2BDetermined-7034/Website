import React, { Component } from 'react';

class PPEProject extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                    <div className="container">
                            <div className="jumbotron text-center bg-white">
                                <img src={require('../artifacts/images/ppe/flyer.png')} className="d-block w-100" alt="Flyer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="jumbotron text-center bg-white">
                            <h1 className="display-4 font-weight-bold">Personal Protective Equipment Project</h1>
                            <p className="lead">
                                2B Determined has partnered with Wilsonville High School's Error Code Xero to produce face shields for essential workers during the COVID-19 pandemic.
                                We have donated masks to hospitals, police and fire departments, and grocery stores around the country.
                                If you or an organization you know is in need of face fields, please fill
                        out <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-or69Q8A6DGK1wpm4DJtr97SzUk4Q6q1zTKlK0brqaUSzMA/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">this form</a> or contact
                        us at <a href="mailto:wlhsfrc@gmail.com">wlhsfrc@gmail.com</a>.
                    </p>
                            <hr />
                            <div className="embed embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" title="Oregonian PPE Video" src="https://www.youtube.com/embed/Arx6-Fl2XzE" frameBorder="0" allowFullScreen />
                            </div>
                            
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="container">
                        <div className="jumbotron text-center bg-white">
                            <div className="carousel slide" data-ride="carousel" id="ppePicsCarousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#ppePicsCarousel" data-slide-to="0" className="active" />
                                    <li data-target="#ppePicsCarousel" data-slide-to="1" />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require('../artifacts/images/ppe/masks.jpg')} className="d-block w-100" alt="1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../artifacts/images/ppe/shirtBags.png')} className="d-block w-100" alt="2" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#ppePicsCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#ppePicsCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default PPEProject;