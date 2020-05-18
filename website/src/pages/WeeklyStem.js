import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

let videos = [
    {
        title: "Week 3",
        url: "https://www.youtube.com/embed/rChv_jtlS0k"
    },
    {
        title: "Week 2",
        url: "https://www.youtube.com/embed/J-7qrXkvQIY",
    },
    {
        title: "Week 1",
        url: "https://www.youtube.com/embed/LiTIuPwqZ6o",
    }
]

class WeeklyStem extends Component {
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
                                videos.map((video, index) =>
                                <li key={index} data-target="#videoCarousel" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`}/>)
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                videos.map((video, index) =>
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

export default WeeklyStem;