import React, { Component } from 'react';
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
                                       Coming soon!
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
            <div className="col-sm-6">
                <div className="jumbotron text-center bg-white">
                    <p className="lead">image</p>
                </div>
            </div>
            
            <div className="col-sm-4">
                <div className="jumbotron text-center bg-white">
                <p className="lead">text</p>
                </div>
            </div>
            <div className="col-sm-1" />
        </div>
    </div>
)

}

}
export default DayCamp;