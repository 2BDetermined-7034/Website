import React, { Component } from 'react';
let daycampPics = ['daycamp1.JPG', 'daycamp2.JPG', 'daycamp3.JPG', 'daycamp4.JPG', 'daycamp5.JPG', 'daycamp6.JPG', 'daycamp7.JPG', 'daycamp8.JPG'];

class Camps extends Component {
render (){
return (
    <div className="container-fluid">
        
        <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8"> 
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Camps</h1>
                    <p className="lead">
                        Our various camp programs aim to teach students about STEAM through hands-on experiences.
                        Students learn about engineering, use real-world tools, and receive instruction from both industry professionals and 2B Determined team members.
                        We offer a variety of camp programs, including a comprehensive summer experience and single-day events.
                        Check out our home page for any current camp offerings!
                    </p>
                </div>
            </div>
            <div className="col-sm-2" />
        </div>
            <hr />

        <div className="row">
            <div className="col-sm-3" />
                <div className="col-sm-6">
                    <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Past Camps</h1>
                    <lead>These are some of our favorite past camp programs. We've been hosting these experiences since our rookie year summer camp and we consider their success to be one of our greatest achievements as a team.</lead>
                </div>
            </div>
        <div className="col-sm-3" />
        </div>

        <div className="row">
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Full STEAM Ahead</h1>
                    <hr />
                    <p className="text-left">
                        2B Determined has developed an online daycamp program for 4th-7th graders interested in Science, Technology, Engineering, Art, and/or Math!
                        This camp ran for 5 weeks in 2020, with unique lessons and personalized instruction.
                        Activities and lessons included science and engineering experiments, listening to speakers from various STEAM industries, building lava lamps, coding, and more!
                    </p>
                    <img src={require('../artifacts/images/fullsteamahead.png')} className="d-block w-100" alt="fsaposter" />
                </div>
            </div>

            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Changing the SySTEM</h1>
                    <hr />
                    <p className="text-left">
                        Changing the SySTEM was a free, bi-weekly camp targeted at 6th-8th grade girls interested in STEM held virtually in the spring of 2020.
                        Content was similar to that of our other camp experiences but with a focus on promoting female interest and participation in STEM fields.
                        We're proud of the stong female presence on our team and we hope that offerings like these help to continue that trend well into the future.
                    </p>
                    <img src={require('../artifacts/images/changingthesystem/flyer.jpg')} className="d-block w-100" alt="ctsposter" />
                </div>
            </div>
            
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Day Camps</h1>
                    <hr />
                    <p className="text-left">
                        Students throughout our district are released early one Wednesday per month. Prior to the pandemic, we offered single-day experiences for middle school students
                        to attend on these days. These camps were a great way for students to interact with STEM without the weeklong commitment requirement by our longer experiences
                        and we hope to resume them in the 2022 school year.
                    </p>
                </div>
            </div>
        </div>

        {/* <div className="jumbotron text-center bg-white">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="display-4 font-weight-bold">Full STEAM Ahead</h1>
                                    <p className="lead">
                                        2B Determined developed an online daycamp program for 4th-7th graders interested in Science, Technology, Engineering, Art, and/or Math! This camp ran for 5 weeks in 2020, with unique lessons and personalized instruction. Activities and lessons included science and engineering experiments, listening to speakers from various STEAM industries, building lava lamps, coding, and more!
                                    </p>
                                    
                                </div>
                                
                            </div>
                        </div>*/}
                        
        
        <div className="row mt-4">
            <div className="col-sm-1" />
            <div className="col-sm-6">
                <div className="jumbotron text-center bg-white">
                    <div className="carousel slide" data-ride="carousel" id="daycampPicsCarousel">
                                <ol className="carousel-indicators">
                                    {
                                        daycampPics.map((pic, index) => 
                                            <li key={index} data-target="#daycampPicsCarousel" data-slide-to={index} className={`${index === 0 ? 'active' : ''}`} />
                                        )
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {daycampPics.map((pic, index) => 
                                        <CarouselPic fileName={pic} key={pic} active={index === 0}/>
                                    )}
                                </div>
                                <a className="carousel-control-prev" href="#daycampPicsCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#daycampPicsCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                    <span className="sr-only">Next</span>
                                </a>
                    </div>
                </div>
            </div>
            
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Past Activities</h1>
                    <hr />
                        <ul className="text-left">
                            <li>Mini robot building</li>
                            <li>Scratch programming</li>
                            <li>Spaghetti Challenge</li>
                            <li>3D printing</li>
                            <li>3D modeling</li>
                            <li>Cubelets & Ozobots</li>
                            <li>Lego towers</li>
                            <li>Driving small robots</li>
                            <li>Virtual Reality</li>
                            <li>Flying drones</li>
                            <li><b>And Many More!</b></li>
                        </ul>
                </div>
            </div>
            <div className="col-sm-1" />
        </div>
    </div>
)

}

}

class CarouselPic extends Component {
    render() {
        return (
            <div className={`carousel-item${this.props.active ? ' active' : ''}`}>
                <img src={require(`../artifacts/images/daycamp/${this.props.fileName}`)} className="d-block w-100" alt={this.props.fileName} />
            </div>
        );
    }
}

export default Camps;