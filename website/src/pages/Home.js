import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

var imageGalleryPics = [
    {
        image: 'actionShot.JPG',
        title: ''
    },
    {
        image: 'bunnyBots2019.JPG',
        title: ''
    },
    {
        image: 'camp.JPG',
        title: ''
    },
    {
        image: 'campRockets.JPG',
        title: ''
    },
    {
        image: 'climb.JPG',
        title: ''
    },
    {
        image: 'deepSpaceRobot.jpg',
        title: ''
    },
    {
        image: 'girlsLab.jpg',
        title: ''
    },
    {
        image: 'library.jpg',
        title: ''
    },
    {
        image: 'llama.jpg',
        title: ''
    },
    {
        image: 'team.jpg',
        title: ''
    },
]

class Home extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="container">
                                <div className="card h-100" style={{marginBottom: '32px'}}>
                                    <div className="card-body">
                                        <TwitterTimelineEmbed sourceType="profile" screenName="Team_7034" options={{height: 600}}/>
                                    </div>
                                </div>
                                <div className="jumbotron text-center bg-white">
                                    <h1 className="display-4 font-weight-bold">2B United</h1>
                                    <h1 className="display-4 font-weight-bold">2B Inspired</h1>
                                    <h1 className="display-4 font-weight-bold">2B Determined</h1>
                                    <img src={require('../artifacts/images/2020teamphoto.jpg')} className="d-block w-100" alt="PPE" />
                                </div>
                            </div>
                        </div>
                    <div className="col-sm-8">
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
                            <div className="carousel slide" data-ride="carousel" id="gallery">
                                <ol className="carousel-indicators">
                                    {
                                        imageGalleryPics.map((img, index) =>
                                        <li key={index} data-target="#gallery" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`}/>)
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {
                                        imageGalleryPics.map((img, index) =>
                                        <GalleryImage key={img.image} img={img.image} className="d-block h-100" alt={img.image} active={index === 0} title={img.title} />)
                                    }
                                </div>
                                <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
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

class GalleryImage extends Component {
    render() {
        return(
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <div className="d-block w-100">
                    <img src={require(`../artifacts/images/gallery/${this.props.img}`)} className="d-block w-100" alt={this.props.img} />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default Home;