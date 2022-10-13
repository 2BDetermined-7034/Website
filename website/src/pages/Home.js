import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import CTSInfoForm from '../artifacts/Changing_the_system_info_sheet_2022.pdf'


var imageGalleryPics = [
    {
        image: 'camp.png',
        title: ''
    },
    {
        image: 'campRockets.JPG',
        title: ''
    },
    {
        image: 'lion.jpeg',
        title: ''
    },
    {
        image: 'Llama.png',
        title: ''
    },
    {
        image: 'lolsam.png',
        title: ''
    },
    {
        image: 'octo.jpg',
        title: ''
    },
    {
        image: 'teamphoto2022.png',
        title: ''
    },
    {
        image: 'teambanner.jpg',
        title: ''
    },
    {
        image: 'tree.png',
        title: ''
    },
    {
        image: 'powerPuff.png',
        title: ''
    },
    {
        image: 'robotaction.png',
        title: ''
    },
    {
        image: 'seniors.jpg',
        title: ''
    },
    {
        image: 'robotStance.png',
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
                            <div className="jumbotron text-center bg-white" >
                                <h1 className="display-4 font-weight-bold">2B United</h1>
                                <h1 className="display-4 font-weight-bold">2B Inspired</h1>
                                <h1 className="display-4 font-weight-bold">2B Determined</h1>
                                <img src={require('../artifacts/images/2021teamphoto.JPG')} className="d-block w-100" alt="PPE" />
                                <div className="row mt-4">
                                    <div className="col-sm-4 mb-2">

                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img src={require('../artifacts/images/awards/2022/2022OSF_EngiInsp.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">

                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2022/2022CAIS_winner.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2022/2022CAIS_InvinCtrl.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2022/2022OSF_winner.png')}/>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2021/regionalChairmans.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2021/districtsChairmans.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2019/wilsonvilleJudges.png')}/>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2019/wilsonvilleSafety.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2018/houstonInspiration.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2018/pnwRookieAllStar.png')}/>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2018/lakeOswegoRookieAllStar.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2018/lakeOswegoRookieSeed.png')}/>
                                    </div>
                                    <div className="col-sm-4 mb-2">
                                        <img style={{width: 100}}  src={require('../artifacts/images/awards/2018/wilsonvilleRookieSeed.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">

                    <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">Girls Generation</h1>
                                    <p className="lead">
                                </p>
                                October 15th we’ll be competing in Girls Generation, an offseason competition that highlights women in STEM! It gives people a chance to experience STEM in a more comfortable environment, and we are excited to be involved! We just successfully completed a new type of drive base called swerve which allows the robot to drive in any direction. We are also bringing our robot from the past season in order to give more opportunities for driving, coaching, and competition setting experience. Girls Generation has been a great way for incoming and current team members to learn manufacturing, electrical, software, and experience the team environment! Now that the robot drives we need to finish attaching the climb mechanism and then practice for the upcoming competition!

                                </div>

                            </div>
                        </div>


                        <div className="jumbotron text-center bg-white">
                            <div className="col-sm my-auto">
                                <h1 className="display-4 font-weight-bold">Incoming students!</h1>
                                <p className="lead">
                                    Interesting in joining robotics? Great!!! You're always welcome in room 715 (700 building behind the school)
                                    to come and check out robotics!
                                </p>



                                <a href="https://forms.gle/yEyU4Bh5BM1ASCT8A" target="_blank" rel="nooperner noreferrer" type="button" className="btn btn-success mx-2 mb-1">Emergency Contact Info</a>
                                <a href="https://docs.google.com/document/d/1ZZ4ZRuYdhhTvWdU9l1pxtZcvL9wcgm_2gu6Yq0xtLLU/edit?usp=sharing" target="_blank" rel="nooperner noreferrer" type="button" className="btn btn-success mx-2 mb-1">Team Handbook</a>
                            </div>
                            <div className="col-sm mt-3 mt-md-0">
                            </div>
                        </div>

                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">Elementary School STEAM Camp</h1>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfiokPjU7RNXgY4Wm8cZgXaJCxdD-7VqGbLouSZ397M0XvI4w/viewform?usp=sf_link" target="_blank" rel="nooperner noreferrer" type="button" className="btn btn-success mx-2 mb-1">Sign up</a>
                                    <img src={require('../artifacts/images/fliers/Full_STEAM_Ahead_2022_Flyer-3.png')} className="d-block w-100" alt="PPE" />

                                </div>

                            </div>
                        </div>

                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">Lab Access</h1>
                                    <p className="lead">
                                        Here is a map of where our lab is located. The classroom is in room 715 in the 700 building behind the school.
                                    </p>
                                </div>
                                <div className="col-sm mt-3 mt-md-0">
                                    <img src={require('../artifacts/images/map.png')} className="d-block w-100" alt="letter" />
                                </div>
                            </div>
                        </div>


                                    <img src={require('../artifacts/images/map.png')} className="d-block w-100" alt="letter" />
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">FIRST Houston Championship Results</h1>
                                    <p className="lead">
                                        During our Championship competition at the FIRST Houston Championship event, our team finished 4th
                                        seed in our division and made it all the way to division finals with our partners 1648, 1710, and 1533.
                                        We want to congratulate our team member Anna Olsen for her Safety All-Star award and we want to thank all who donated to
                                        our GoFundMe. It's been a great season and we can't wait for our next!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">PNW Championship Competition Results</h1>
                                    <p className="lead">
                                        During our third competition at the PNW District event, our team finished 19st
                                        seed and we were picked by the 7th alliance captain team 997, but unfortunately we were knocked out during quarter final matches.
                                        We want to congratulate our team members Anna Olsen for her Safety All-Star award and Max Dodge for being a First Deans List Finalist.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">OSF Competition Results</h1>
                                    <p className="lead">
                                        During our second competition at the OSF week 4 event, our team finished 4st
                                        seed, moved to 3rd, and were the captains of the winning alliance. We were also given the Engineering Inspiration award
                                        and we want to congratulate our team members Anna Olsen for her Safety All-Star award and Max Dodge for being a Deans List Semi-Finalist.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">CAIS Competition Results</h1>
                                    <p className="lead">
                                        During our first competition at the CAIS week 1 event, our team finished 1st
                                        seed and were the captains of the winning alliance. We were also given the Innovation in Control award
                                        and we want to congratulate our team members Anna Olsen for her Safety All-Star award and Max Dodge for being a Deans List Semi-Finalist.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm my-auto">
                                    <h1 className="display-4 font-weight-bold">Newsletter</h1>
                                    <p className="lead">
                                        Sign up for our newsletter in order to recieve updates about the team every month!
                                    </p>
                                    <a href="https://www.smore.com/7pdna" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">View</a>
                                </div>
                                <div className="col-sm mt-3 mt-md-0">
                                    <img src={require('../artifacts/images/newsletter.PNG')} className="d-block w-100" alt="letter" />
                                </div>
                            </div>
                        </div>
                        <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm">
                                    <h1 className="display-4 font-weight-bold">PPE Project</h1>
                                    <p className="lead">
                                        2B Determined has been producing face shields for essential workers and members of our community throughout the COVID-19 pandemic.
                                    </p>
                                    <Link to="/community/ppe" type="button" className="btn btn-success mx-2 mb-1">Learn More</Link>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-or69Q8A6DGK1wpm4DJtr97SzUk4Q6q1zTKlK0brqaUSzMA/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2 mb-1">Request PPE</a>
                                    <a href="https://www.gofundme.com/f/west-linn-robotics-expenses" target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success mx-2">Donate</a>
                                </div>
                                <div className="col-sm my-auto">
                                    <img src={require('../artifacts/images/ppe/masks.jpeg')} className="d-block w-100" alt="PPE" />

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