import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../components/pagination-home';
import CTA from '../components/cta';
class Home extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/hero.jpg"})`
    };
    const TITLE = 'BACKSure - Home'
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
                            <h1>Shrouded In Secrecy… <span>Until Now!</span></h1>
                            <p>At BACKsure, our transport-specific industry experience enables us to successfully handle your insurance requirements and provide proactive and tailored advice delivered with integrity.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-scroll d-none d-md-block">
                <div className="scroll-wheel" onclick="document.getElementById('title').scrollIntoView()"></div>
            </div>
        </div>
        <div className="content-container card-container">
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
        <div class="content-container pt-0 home-intro-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="heading">
                            <h2>Nothing is more powerful than vision from the <img src={`${process.env.PUBLIC_URL}/include/images/back.svg`} alt="back"/></h2>
                        </div>
                        <p>
                            A 21st century independent insurance brokerage with a niche-specialism in delivering risk managed solutions for the transport sector. Our approach is simple. Through getting to know you, your business and employees, we
                            will understand the challenges your business faces and in turn will be able to provide you with an insurance proposition that is sector-specific and delivers exceptional standards and satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Pagination />
        <CTA />

        </>
    );
  }
}
export default Home;