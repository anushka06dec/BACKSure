import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../components/pagination-business';
import CTA from '../components/cta';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Business extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/business-banner.jpg"})`
    };
    const TITLE = 'BACKSure - Business'
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
                            <h1>Your Business</h1>
                            <h5>Meet. Measure. Manage. Mitigate</h5>
                            <p>
                                You’re passionate about your business and so are we. At BACKsure we want to partner with you to understand your business, its processes and requirements so we can provide <br />
                                a truly bespoke, sector-specific solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-scroll d-none d-md-block">
                <div className="scroll-wheel" onclick="document.getElementById('title').scrollIntoView()"></div>
            </div>
        </div>
        <div className="content-container intro-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h3>Your Business</h3>
                        <p>At BACKsure our approach is simple: We want to get under your skin and understand your business like you do; only then can we provide a comprehensive insurance solution tailored to your business.</p>
                        <p>
                            Businesses with transport at the heart are not like any other businesses. They are constantly evolving whilst under tight compliance pressures. At BACKsure, we are with you every mile, enabling you to focus on your
                            business, whilst we focus on protecting it.
                        </p>
                        <p>
                            Same wording as MC: At BACKsure we provide every client with a comprehensive insurance solution tailored to the needs of your business. We take time to understand how your business operates and understand the day-to-day
                            running of your business, therefore we can be sure that your insurance solution covers everything you require, whether you are aware you need it or not.
                        </p>
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
                                    <h4>
                                        We have your <img src={`${process.env.PUBLIC_URL}/include/images/back.svg`} alt="back"/>
                                    </h4>
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
export default Business;