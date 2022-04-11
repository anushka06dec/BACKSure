import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import CTA from '../components/cta';
import Pagination from '../components/pagination-effective-risk';
class Effectiverisk extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/claims-banner.jpg"})`
    };
    const TITLE = 'BACKSure - Effective Risk Management'
    return (
        <>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        <div class="inner-banner-container d-flex align-items-center">
            <div class="inner-banner-bg" style={heroImage}></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 offset-md-1">
                        <div class="inner-banner-content">
                            <h1>Effective Risk <span>Management</span></h1>
                        </div>
                    </div>
                </div>
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
                                <li class="breadcrumb-item active">EFFECTIVE RISK MANAGEMENT</li>
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
                        <h3>The insurance policy that covers all of your business’ needs.</h3>
                        <p>At BACKsure we work with you to minimise any future risk to your business and ensure an insurance solution that covers everything your business requires.</p>
                        <p>In today’s society most people don’t think twice about processing a claim, whether this be against another vehicle on the road, a business or service provider.</p>
                        <p>However, with effective Risk Management in place this can drastically reduce such events and the associated costs.</p>
                        <h4>Strategic Risk Management</h4>
                        <p>
                            At BACKsure we focus heavily on the importance of risk management to your business. Having an effective approach to risk management can assist our specialist team in not only finding and processing an insurance policy
                            that covers all of your business needs but obtain rates below the market average.
                        </p>
                        <p>With the correct risk management in place, your business can reduce insurance spend, reduce management time in dealing with incidents and furthermore, reduce fines.</p>
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
export default Effectiverisk;