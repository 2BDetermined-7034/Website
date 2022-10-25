import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

class Sponsors extends Component {
    render() {
        return(
            <div className="container">
                <div className="row text-center">
                    <h2 className="display-4 font-weight-bold w-100">We thank our sponsors for making this program possible!</h2>
                </div>
                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Title Sponsors</h1>
                </div>
                <div className="row text-center">
                    <div className="col-sm mt-3">
                        <TitleSponsor image='te.png' name="TE Connectivity" link="https://www.te.com/usa-en/home.html"><b>TE Connectivity</b> works with technology to design and build devices that support a high-tech future.</TitleSponsor>
                    </div>
                    <div className="col-sm mt-3">
                        <TitleSponsor image='lam.png' name="Lam Research" link="https://www.lamresearch.com/"><b>Lam Research</b> is dedicated to the success of consumers by being a world-class provider of innovative technology and productivity solutions to the semiconductor industry.</TitleSponsor>
                    </div>
                    <div className="col-sm mt-3">
                        <TitleSponsor image='ef.jpg' name="Erickson Forensic" link="https://ericksonforensic.com/"><b>Erickson Forensic</b> Erickson Forensic specializes in evidence-based accident reconstruction for a variety of vehicles including  passenger cars, tractor-trailers and farm equipment, as well as incidents involving bicycles and pedestrian</TitleSponsor>
                    </div>
                </div>
                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Gold Sponsors</h1>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <GoldSponsor image='wied.png' name="The Wied Family" link="#" />
                    </div>
                    <div className="col-sm mt-3">
                        <GoldSponsor image='walsh.png' name="Walsh Construction Co." link="https://walshconstruction.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <GoldSponsor image='acme.png' name="ACME Construction Supply Co." link="https://www.acmetool.com/" />
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <GoldSponsor image='mentor.png' name="Mentor Graphics" link="https://www.mentor.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <GoldSponsor image='csm.png' name="Clackamas Steel" link="https://www.facebook.com/pages/category/Metal-Supplier/Clackamas-Steel-Mfg-Inc-141470222559712/" />
                    </div>
                    <div className="col-sm mt-3" />
                </div>
                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Bronze Sponsors</h1>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='dwfritz.jpg' name="DW Fritz" link="https://www.dwfritz.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='mercedes.png' name="Mercedes-Benz" link="https://www.mbusa.com/en/home" />
                    </div>
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='anthem.png' name="Anthem Memory Care" link="https://www.anthemmemorycare.com/"/>
                    </div>
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='lionsclub.jpg' name="West Linn Lions club" link="http://www.wl-lions.org/"/>
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='siemens.jpg' name="Siemens" link="https://new.siemens.com/us/en.html" />
                    </div>
                    <div className="col-sm mt-3">
                        <BronzeSponsor image='logicalposition.png' name="Logical Position" link="https://www.logicalposition.com/" />
                    </div>
                    <div className="col-sm mt-3"/>    
                </div>
                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Community Sponsors</h1>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='aauw.png' name="American Association of University Women" link="https://www.aauw.org/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='essenceofchina.png' name="The Essence of China Restaurant" link="http://www.theessenceofchina.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='tutoringcenter.png' name="The Tutoring Center - West Linn" link="https://tutoringcenter.com/index.php" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='lesschwab.png' name="Les Schwab Tire Center" link="https://www.lesschwab.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='roane.jpg' name="Roane Family Dental" link="https://roanefamilydental.com/" />
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='advantis.png' name="Advantis Credit Union" link="https://www.advantiscu.org/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='ortop.png' name="Oregon Robotics Tournament & Outreach Program" link="https://ortop.org/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='osr.png' name="Ocean Sky Restaurant" link="http://ocean-sky.letseat.at/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='sanblas.png' name="San Blas Mexican Restaurant" link="http://mexicanfamilyrestaurants.com/san-blas-west-linn-oregon/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='smilelinn.png' name="Smile Linn Dental" link="http://smilelinndental.com/" />
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='cascadesummit.png' name="Cascade Summit Cleaners" link="https://www.cascadesummitcleaner.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='eyetoeye.png' name="Eye to Eye Clinic" link="http://www.eyetoeyeclinic.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='jetboats.png' name="Willamette Jet Boats" link="https://willamettejet.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='lcp.png' name="Linn City Pub" link="http://www.linncity.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='asiankitchen.png' name="Asian Kitchen" link="https://www.facebook.com/Asiankitchen19349/" />
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='abbotandmunns.png' name="Abbot and Munns Law Firm" link="https://www.facebook.com/pages/category/Criminal-Lawyer/Abbott-and-Munns-LLC-155840194454080/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='haskett.png' name="Haskett Orthodontics" link="https://www.haskettortho.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='kombucha.png' name="Brew Dr. Kombucha" link="https://www.brewdrkombucha.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='bellagios.png' name="Bellagios Pizza" link="https://bellagiospizza.com/westlinn" />
                    </div>
                    <div className="col-sm mt-3" >
                        <CommunitySponsor image='LOPBA.png' name="Lake Oswego Police Benevolent Association" link="https://www.ci.oswego.or.us/police" />
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='starkstreet.png' name="Stark Street Lawn & Garden Equipment" link="https://www.starkstreet.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='tenanttech.png' name="Tenant Technologies" link="https://www.tenanttech.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='gentlecarechiropractic.jpg' name="Gentle Care Chiropractic" link="http://www.gentledoctors.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunitySponsor image='statefarm.jpg' name="State Farm Insurance" link="https://www.statefarm.com/agent/us/or/west-linn/paul-toole-wjz0v1ys000" /> 
                    </div>
                    <div className="col-sm mt-3" >
                        <CommunitySponsor image='westlakeproperties.png' name="West Lake Properties" link="https://westlakepropertiesonline.com/" />
                    </div>

                </div>

                <div className="row text-center mt-3">
                    <div className="col-sm mt-3" >
                        <CommunitySponsor image='premierMA.png' name="Premier Martial Arts" link="https://premiermartialarts.com/westlinn/" />
                    </div>
                    <div className="col-sm mt-3" >
                        
                    </div>
                    <div className="col-sm mt-3" >
                        
                    </div>
                    <div className="col-sm mt-3" >
                       
                    </div>
                    <div className="col-sm mt-3" >
                        
                    </div>

                    <hr />
                </div>

                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Community Partners</h1>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-sm mt-3">
                        <CommunityPartner image='aauw.png' name="American Association of University Women" link="https://www.aauw.org/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunityPartner image='dwfritz.jpg' name="DW Fritz" link="https://www.dwfritz.com/" />
                    </div>
                    <div className="col-sm mt-3">
                        <CommunityPartner image='mentor.png' name="Mentor Graphics" link="https://www.mentor.com/" />
                    </div>
                </div>
                <hr />
                <div className="row text-center">
                    <h1 className="font-weight-bold w-100">Interested in Supporting Us?</h1>
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
            </div>
        );
    }
}

class TitleSponsor extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top p-3 w-100" src={require(`../artifacts/images/sponsors/title/${this.props.image}`)} alt={`${this.props.name} logo`}/>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.children}</p>
                </div>
                <div className="card-footer">
                    <a href={this.props.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
            </div>
        );
    }
}

class GoldSponsor extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top p-3 w-100" src={require(`../artifacts/images/sponsors/gold/${this.props.image}`)} alt={`${this.props.name} logo`} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                </div>
                {this.props.link !== '#' &&
                    <div className="card-footer">
                            <a href={this.props.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                }
            </div>
        );
    }
}

class BronzeSponsor extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top p-3 w-100" src={require(`../artifacts/images/sponsors/bronze/${this.props.image}`)} alt={`${this.props.name} logo`} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                </div>
            </div>
        );
    }
}

class CommunitySponsor extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top p-3 w-100" src={require(`../artifacts/images/sponsors/community/${this.props.image}`)} alt={`${this.props.name} logo`} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                </div>
            </div>
        );
    }
}

class CommunityPartner extends Component {
    render() {
        return (
            <div className="card h-100">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top p-3 w-100" src={require(`../artifacts/images/sponsors/partners/${this.props.image}`)} alt={`${this.props.name} logo`} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                </div>
                {this.props.link !== '#' &&
                    <div className="card-footer">
                            <a href={this.props.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </div>
                }
            </div>
        );
    }
}

export default Sponsors;