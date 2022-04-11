import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../components/pagination-business';
import CTA from '../components/cta';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Whatweget extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/what-we-do-banner.jpg"})`
    };
    const TITLE = 'BACKSure - What You Get'
    return (
        <>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        <div className="hero-container d-flex align-items-center">
            <div className="hero-bg" style={heroImage}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-1">
                        <div className="hero-text">
                            <h1>What You Get</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur</h5>
                            <p>Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas. Donec vitae semper erat. Phasellus cursus nibh non metus sollicitudin, sit amet vulputate magna pulvinar.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-scroll d-none d-md-block">
                <div className="scroll-wheel" onclick="document.getElementById('title').scrollIntoView()"></div>
            </div>
        </div>
       <div className="content-container card-container pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="card-list card-slider d-md-flex flex-md-wrap">
                            <li className="card-item">
                                <div className="card-box text-center d-flex flex-column">
                                    <h4>Tailored Solutions</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
                                    <div className="card-btn mt-auto"><Link to="/tailored-solutions" className="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                            <li className="card-item">
                                <div className="card-box text-center d-flex flex-column">
                                    <h4>Risk Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo.</p>
                                    <div className="card-btn mt-auto"><Link to="/effective-risk" className="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                            <li className="card-item">
                                <div className="card-box text-center d-flex flex-column">
                                    <h4>Claims Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
                                    <div className="card-btn mt-auto"><Link to="/claims-management" className="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <CTA />
        <Pagination />
        </>
    );
  }
}
export default Whatweget;