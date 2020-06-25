import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

let submissionPics = [
    {  
        image: "solaroven.jpg",
        title: "Liam H's solar oven"
    },

    { 
        image: "cardtower1.jpg",
        title: ""
    },
    {
        image: "cardtower2.jpg",
        title: ""
    },
    {
        image: "cardtower3.jpg",
        title: ""
    },
    {
        image: "cardtower4.JPG",
        title: ""
    },

]

class WeeklyStem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        axios.get('http://wlhsfrc.com/api/weeklystem.json').then(response => {
            this.setState({
                videos: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Weekly STEM Challenges</h1>
                    <p className="lead">
                        We invite our community to participate in our weekly STEM challenges during the quarantine. Please visit our <a style={{color: "red"}} href="https://www.youtube.com/channel/UC-brjJyCdV9xLKw3mFo6X6Q"><FontAwesomeIcon icon={faYoutube}/></a> for more information!
                    </p>
                    <hr className="my-4" />
                    <div className="carousel slide" data-ride="carousel" id="videoCarousel">
                        <ol className="carousel-indicators">
                            {
                                this.state.videos.map((video, index) =>
                                <li key={index} data-target="#videoCarousel" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`}/>)
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                this.state.videos.map((video, index) =>
                                <Video key={`${video.title} ${index}`} title={video.title} video={video.url} active={index === 0}/>)
                            }
                        </div>
                        <a className="carousel-control-prev" href="#videoCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#videoCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>


                <div className="jumbotron text-center bg-white">
                <h1 className="display-4 font-weight-bold">STEM Challenge Submissions</h1>
                    <hr />
                            <div className="row">
                                <div className="col-sm-1"/>
                                <div className="col-sm-10">
                                    <div className="embed embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" title="playlist" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLJJu1hVnK81LbUsI0EYUe05yGX18_ZOmX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>  
                                </div>
                                <div className="col-sm-1"/>
                            </div>
                            <hr />            
                        <div className="row">
                            <div className="col-sm-1" />
                            <div className="col-sm-10">
                            <div className="carousel slide" data-ride="carousel" id="submissionPics">
                                <ol className="carousel-indicators">
                                    {
                                        submissionPics.map((img, index) =>
                                        <li key={index} data-target="#submissionPics" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`}/>)
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {
                                        submissionPics.map((img, index) =>
                                        <Submissions key={img.image} img={img.image} className="d-block h-100" alt={img.image} active={index === 0} title={img.title} />)
                                    }
                                </div>
                                <a className="carousel-control-prev" href="#submissionPics" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#submissionPics" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            </div>
                            <div className="col-sm-1" />
                        </div>
                            

                </div>


            </div>
        );
    }
}

class Video extends Component {
    render() {
        return(
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <div className="d-block w-100 embed embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" title={this.props.title} src={this.props.video} frameBorder="0" allowFullScreen />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

class Submissions extends Component {
    render() {
        return(
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <div className="d-block w-100">
                    <img src={require(`../artifacts/images/submissions/${this.props.img}`)} className="d-block w-100" alt={this.props.img} />
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default WeeklyStem;