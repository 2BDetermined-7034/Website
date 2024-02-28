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
                    2B Determined proudly hosts three camp programs for varying age ranges. We aim to teach students 
                    about STEAM (Science, Technology, Engineering, Art, and Math) through hands-on experiences. 
                    Campers learn about engineering, real-world tools, and receive instruction from both team 
                    members and industry professionals.
                    <br />
                    <br />
                    If you'd like to register for a camp, check out our 
                        <a href="https://wlhsfrc.com/home"> home page</a> to view any upcoming camps!
                    </p>
                </div>
            </div>
            <div className="col-sm-2" />
        </div>


        {/*}
        <div className="row">
        <div className="col-sm-2" />
            <div className="col-sm-8"> 
                <div className="jumbotron text-center bg-white">
                <h1 className="display-4 font-weight-bold">Changing The SySTEM Camp!</h1>
                <p className="lead">
                                       West Linn Robotics is holding our annual all-girls STEM camp later this month! Registration is open now.
                                        <br/>
                                        The website is now accessible at <a href={"changingthesystem.net"}><b>changingthesystem.net</b></a>
                                        <br/>
                                        Register:<a href={"https://forms.gle/1sWoaQwaUhDSB2Et9"}><b>https://forms.gle/1sWoaQwaUhDSB2Et9</b></a>
                                      </p>
                                      <p className="lead">
                                        <b><u>Camp Dates:</u></b>
                                        <br/>Mondays & Wednesdays
                                        <br/><b>When:</b> May 15th - May 24th
                                        <br/>4PM - 7:30 PM
                                        <br/><b>For:</b> 6-8th graders
                                        <br/><b>Where:</b> West Linn High School 
                                      </p>
                                      <div className="col-sm mt-3 mt-md-0">
                                      <img src={require('../artifacts/images/changingthesystem/Changing_the_SySTEM_Flyer_2023.jpg')} className="d-flex w-100" alt="letter" />
                                  </div>
                </div>
            </div>
          
            <div className="col-sm-2" />
        </div>
            <hr />
*/}

        <div className="row">
            <div className="col-sm-3" />
                <div className="col-sm-6">
                    <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Camp Summaries</h1>
                    <p className="lead">
                    </p>
                    </div>
            </div>
        <div className="col-sm-3" />
        </div>

        <div className="row">
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Changing the SySTEM</h1>
                    <hr />
                    <p className="text-left">
                    2B Determined proudly hosts their annual all-girls STEM Camp:
                    <li>Time: Late May</li>
                    <li>Price: Cost free</li>
                    <li>Demographic: Non-male middle school students</li>
                    <li>Length: 2 weeks</li>
                    <li>Lessons taught by experienced team members</li>
                    <li>Featuring female STEM professional speakers.</li>
</p>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Summer of STEAM</h1>
                    <hr />
                    <p className="text-left">
                    Introducing our STEAM summer camp to introduce incoming high schoolers:
                    <li>Time: Late July</li>
                    <li>Price: TBD</li>
                    <li>Demographic: 8th and 9th graders</li>
                    <li>Length: 1 to 2 weeks</li>
                    <li>A variety of advanced lessons taught by experienced team members</li>
</p>
                </div>
            </div>
        
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                    <h1 className="display-4 font-weight-bold">Full STEAM Ahead</h1>
                    <hr />
                    <p className="text-left">
                    Presenting our day STEAM camp aimed at elementary schoolers:
                    <li>Time: Late Fall</li>
                    <li>Price: TBD</li>
                    <li>Demographic: 3rd-5th graders</li>
                    <li>Length: 1 day</li>
                    <li>Simple lessons exploring STEAM and engineering</li>

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