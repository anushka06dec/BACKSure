import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../components/pagination-business';
import CTA from '../components/cta';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Whatwedo extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/what-we-do-banner.jpg"})`
    };
    const TITLE = 'BACKSure - What We Do'
    return (
        <>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        <div className="hero-container d-flex align-items-center">
            <div className="hero-bg" style={heroImage}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-1">
                        <div className="hero-text">
                            <h1>What We Do</h1>
                            <h5>Fleet Insurance Specialists</h5>
                            <p>At BACKsure, our transport-specific industry experience enables us to successfully handle your insurance requirements and provide proactive and tailored advice delivered with integrity.</p>
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
                        <h3>Bespoke Transportation Insurance Solutions</h3>
                        <p>
                            Our innovative approach enables us to deliver unique and forward-thinking insurance solutions to businesses like yours which have transport at their heart. Our dedicated and specialist team provide bespoke transportation
                            insurance solutions, designed to enable your business to manage risk and benefit from a cost-effective approach.
                        </p>
                        <p>At BACKsure, we provide insurance solutions regardless of the size of the fleet and our transportation insurance enables your business to protect individual vehicles under one single policy.</p>
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
        <div className="content-container info-container pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h4>We have your BACK</h4>
                        <p>At BACKsure success is a journey, not just a destination. We are with you every mile, enabling you to focus on your business, whilst we focus on protecting it.</p>
                        <h4>Evolution creates perfection</h4>
                        <p>Think different. We are, but are you? Our approach is simple; to understand your business so we can deliver revolutionary advice and risk managed solutions.</p>
                        <h4>Chance is a fine thing, but opportunity is better</h4>
                        <p>AT BACKsure we want to partner with you to understand your business, its processes and requirements.</p>
                        <h4>Specialist fleet insurance broker</h4>
                        <p>
                            As specialist fleet insurance brokers, we use a panel of insurance providers to guarantee that you will always receive the best policy for your business. In addition, BACKsure provides bespoke business fleet insurance
                            protection in case of the unexpected – because as we know, this can happen in the blink of an eye.
                        </p>
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
export default Whatwedo;
