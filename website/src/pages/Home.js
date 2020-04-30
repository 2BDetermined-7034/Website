import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="jumbotron text-center bg-white">
                    <div className="row">
                        <div className="col-sm">
                            <img src={require('../artifacts/images/ppe/masks.jpg')} className="d-block w-100" alt="PPE" />
                        </div>
                        <div className="col-sm my-auto">
                            <h1 className="display-4 font-weight-bold">PPE Project</h1>
                            <p className="lead">
                                2B Determined has partnered with Wilsonville High School's Error Code Xero to produce face shields for essential workers during the COVID-19 pandemic.
                            </p>
                            <Link to="/community/ppe" type="button" className="btn btn-success mx-2 mb-1">Learn More</Link>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-or69Q8A6DGK1wpm4DJtr97SzUk4Q6q1zTKlK0brqaUSzMA/viewform?edit_requested=true" type="button" className="btn btn-success mx-2 mb-1">Request PPE</a>
                            <a href="https://www.gofundme.com/f/west-linn-robotics-expenses" type="button" className="btn btn-success mx-2">Donate</a>
                        </div>
                    </div>
                </div>
                <div className="jumbotron text-center bg-white">
                    <div className="row">
                        <div className="col-sm my-auto">
                            <h1 className="display-4 font-weight-bold">2B United</h1>
                            <h1 className="display-4 font-weight-bold">2B Inspired</h1>
                            <h1 className="display-4 font-weight-bold">2B Determined</h1>
                        </div>
                        <div className="col-sm">
                            <img src={require('../artifacts/images/2020teamphoto.jpg')} className="d-block w-100" alt="PPE" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;