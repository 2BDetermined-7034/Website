import React, { Component } from 'react';
let daycampPics = ['daycamp1.JPG', 'daycamp2.JPG', 'daycamp3.JPG', 'daycamp4.JPG', 'daycamp5.JPG', 'daycamp6.JPG', 'daycamp7.JPG', 'daycamp8.JPG'];

class DayCamp extends Component {
render (){
return (
    <div className="container-fluid">
        
        <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8"> 
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Day Camp</h1>
                                    <p className="lead">
                                    Our day camps aim to teach students about STEM through hands-on experiences. 
                                    Students will learn about engineering, use real-world tools, and receive instruction from industry professionals. 
                                    We are unsure when our next day camp will be held, so stay tuned!
                                    </p></div>
             </div>
            <div className="col-sm-2" />

        </div>

            <hr />

        <div className="row">
            <div className="col-sm-3" />
                <div className="col-sm-6">
                    <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Past Day Camps</h1>
                </div>
            </div>
        <div className="col-sm-3" />
        </div>

        <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Full STEAM Ahead</h1>
                    <hr />
                        <p className="text-left">
                        2B Determined developed an online daycamp program for 4th-7th graders interested in Science, Technology, Engineering, Art, and/or Math! This camp ran for 5 weeks in 2020, with unique lessons and personalized instruction. Activities and lessons included science and engineering experiments, listening to speakers from various STEAM industries, building lava lamps, coding, and more!
                        </p>
                </div>
            </div>

            

            <div className="col-sm-4">
                <img src={require('../artifacts/images/fullsteamahead.png')} className="d-block w-100" alt="fsaposter" />
            </div>
            
            <div className="col-sm-1" />
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
                        
        
        <div className="row">
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

export default DayCamp;