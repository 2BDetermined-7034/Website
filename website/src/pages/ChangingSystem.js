import React, { Component } from 'react';

class ChangingSystem extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm-2" />
                <div className="col-sm-8"> 
                    <div className="jumbotron text-center bg-white">
                        <h1 className="display-4 font-weight-bold">Changing The SySTEM website!</h1>
                        <p className="lead">
                        Recently, we unveiled a brand-new website for our Changing The SySTEM girls camp, 
                        which will feature our whole camp package when it becomes available. 
                        The website is now accessible at <a href={"https://changingthesystem.net/"}>changingthesystem.net</a>
                        </p>
                        <p className="lead">
                        Our mission is to empower young women to pursue careers in STEM. 
                        Students build confidence in themselves while being inspired by female role models who have succeeded in their own underrepresented careers. 
                        We are determined to provide free opportunities for girls to engage in science and technology in 
                        safe environments by giving them space to explore and persevere when facing challenges. 
                        </p>
                        <div className="col-sm mt-3 mt-md-0">
                            <img src={require('../artifacts/CTSWebsite.png')} className="w-50" alt="letter" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-2" />
            </div>
        )
    }
}
    

export default ChangingSystem;