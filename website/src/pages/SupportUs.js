import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import "./test.css";

class SupportUs extends Component {
    render() {
        return (
            <div className="row text-center">
            <h1 className="font-weight-bold w-100 white-text">Interested in Supporting Us?</h1>
            <div className="col-sm">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="row px-3">
                            <h5>Prospective Sponsors or Partners</h5>
                            <p>Please reach out to our business team for further information.</p>
                        </div>
                        <div className="row px-3">
                            <div className="input-group">
                            <input className="form-control" type="email" value="wlhsfrc@gmail.com" disabled />
                                <div className="input-group-append">
                                <CopyToClipboard text="wlhsfrc@gmail.com">
                                        <button className="btn btn-success">
                                            <FontAwesomeIcon icon={faCopy} />
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row px-3">
                            <div className="m-3 p-3 bg-light w-100 h-100 textCenter addressBox">
                                <h5>Mail Checks To:</h5>
                                <p>
                                    West Linn High School ASB<br />
                                    Attn: Robotics<br />
                                    5464 West A Street West Linn, Oregon 97068
                                </p>
                            </div>
                        </div>
                        <div className="row px-3">
                            <div className="m-3 p-3 bg-light w-100 h-100 textCenter addressBox">
                                <h5>IRS EIN</h5>
                                <p>
                                    85-1375698 <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card h-100">
                    <div className="card-body">
                        <embed height="500px" width="100%" src="https://www.gofundme.com/f/s49nup-west-linn-robotics-expenses?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet" type="text/html" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default SupportUs;