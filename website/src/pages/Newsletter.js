import React, { Component } from 'react';

// https://www.smore.com/63e8z-wlhs-robotics
    class Newsletter extends Component {
        render() {
            return (
                <div className="container-fluid">
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100 white-text">Newsletter</h1>
                    <div className="col-sm-2" />
                    <div className="col-sm-8">
                            <div className="col-sm my-auto">
                                <div className="card h-100">
                                    <div className="card-body">
                                    <embed height="800px" width="100%" src="https://www.smore.com/63e8z-wlhs-robotics" type="text/html" />
                                </div>
                            </div>
                        <div className="col-sm-2" />
                    </div>
                </div>
            </div>
            </div>
            )
        }
    }

export default Newsletter;