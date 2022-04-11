import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import CTA from '../components/cta';
import Pagination from '../components/pagination-tailored-solutions';
class Tailoredsolutions extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/what-we-do-banner.jpg"})`
    };
    const TITLE = 'BACKSure - Tailored Solutions'
    return (
        <>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        <div className="inner-banner-container d-flex align-items-center">
            <div className="inner-banner-bg" style={heroImage}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-1">
                        <div className="inner-banner-content">
                            <h1>Tailored <span>Solutions</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="breadcrumb-container d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/what-you-get">WHAT YOU GET</Link></li>
                                <li className="breadcrumb-item active">TAILORED SOLUTIONS</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <p>We believe that by understanding exactly how your business operates we can provide a comprehensive insurance solution tailored to your business.</p>
                        <p>Our team will take time to get to know you, your business, what your business has to offer customers and what makes your business stand out from its competitors.</p>
                        <p>With this information we work in partnership with industry leading insurers to [ ] leverage a comprehensive insurance solution that includes everything your business requires.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-container card-container py-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="card-list cards-list card-slider d-md-flex flex-md-wrap">
                            <li className="card-item">
                                <div className="card-box text-center">
                                    <h4>We have your <img src={`${process.env.PUBLIC_URL}/include/images/back.svg`} alt="back"/></h4>
                                    <p>At BACKsure success is a journey, not just a destination. We are with you every mile, enabling you to focus on your business, whilst we focus on protecting it</p>
                                </div>
                            </li>
                            <li className="card-item">
                                <div className="card-box text-center">
                                    <h4>Evolution creates perfection</h4>
                                    <p>Think different. We are, but are you? Our approach is simple; to understand your business so we can deliver high quality specialist advice and risk managed solutions.</p>
                                </div>
                            </li>
                            <li className="card-item">
                                <div className="card-box text-center">
                                    <h4>Chance is a fine thing, but opportunity is better</h4>
                                    <p>AT BACKsure we want to partner with you to understand your business, its processes and requirements.</p>
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
export default Tailoredsolutions;