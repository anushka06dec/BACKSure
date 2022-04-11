import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter as Link} from "react-router-dom";
import CTA from '../components/cta';
import Pagination from '../components/pagination-claims-management';
class Claimsmanagement extends Component {
    render() {
    const heroImage = {
        backgroundImage: `url(${process.env.PUBLIC_URL+ "/include/images/claims-banner.jpg"})`
    }
    const TITLE = 'BACKSure - Claims Management'
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div class="hero-container d-flex align-items-center">
                <div class="hero-bg" style={heroImage}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 offset-md-1">
                            <div class="hero-text">
                                <h1>Claims <span>Management</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-scroll d-none d-md-block">
                    <div class="scroll-wheel"></div>
                </div>
            </div>
            <div class="breadcrumb-container d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to="/what-you-get">WHAT YOU GET</Link></li>
                                    <li class="breadcrumb-item active">Claims MANAGEMENT</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container info-container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <p>
                                Accidents happen in the blink of an eye and handling claims can be an unwelcome distraction for your business. This is why BACKsure operates a full claims management solution enabling all claims to be handled by our
                                expert in-house team enabling you to carry on with the safe day-to-day running of your business.
                            </p>
                            <h4>Valuable claims support</h4>
                            <p>
                                Our claims management solution means that we negotiate settlements with insurers on your behalf in the most time efficient and cost-effective way for your business. Our focus is on helping clients resolve the matter
                                proactively and promptly, allowing businesses to focus on the day-to-day running of their business. BACKsure’s effective case management system enables the team to access files and work on negotiations in the most
                                efficient and dynamic way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container card-container py-0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="card-list cards-list card-slider d-md-flex flex-md-wrap">
                                <li class="card-item">
                                    <div class="card-box text-center">
                                        <h4>We have your <img src={`${process.env.PUBLIC_URL}/include/images/back.svg`} alt="back"/></h4>
                                        <p>At BACKsure success is a journey, not just a destination. We are with you every mile, enabling you to focus on your business, whilst we focus on protecting it</p>
                                    </div>
                                </li>
                                <li class="card-item">
                                    <div class="card-box text-center">
                                        <h4>Evolution creates perfection</h4>
                                        <p>Think different. We are, but are you? Our approach is simple; to understand your business so we can deliver high quality specialist advice and risk managed solutions.</p>
                                    </div>
                                </li>
                                <li class="card-item">
                                    <div class="card-box text-center">
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
export default Claimsmanagement;
