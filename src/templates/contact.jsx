import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Pagination from '../components/pagination-business';
class Contact extends Component {
	render(){
		const heroImage =  {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "include/images/contact-banner.jpg"})`
    	};
    	const TITLE = 'BACKSure - Contact us'
    	const socialLins = [
    		{
    			id:1,
    			icon:'fa-facebook-square',
    			url:'#',
    		},
    		{
    			id:1,
    			icon:'fa-linkedin',
    			url:'#',
    		},
    		{
    			id:1,
    			icon:'#',
    			url:'fa-twitter-square',
    		},
    	]
		return (
			<>
				<Helmet>
	                <title>{TITLE}</title>
	            </Helmet>
				<div class="hero-container d-flex align-items-center">
				    <div class="hero-bg" style={heroImage}></div>
				    <div class="container">
				        <div class="row">
				            <div class="col-md-5 offset-md-1">
				                <div class="hero-text">
				                    <h2>Let’s <span>Talk</span></h2>
				                    <p>Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas. Donec vitae semper erat.</p>
				                </div>
				            </div>
				        </div>
				    </div>
				    <div class="page-scroll d-none d-md-block">
				        <div class="scroll-wheel" onclick="document.getElementById('title').scrollIntoView()"></div>
				    </div>
				</div>
				<div class="content-container contact-form-container">
				    <div class="container">
				        <div class="row">
				            <div class="col-lg-10 offset-lg-1">
				                <div class="row">
				                    <div class="col-md-5">
				                        <div class="contact-form-left">
				                            <div class="form-group">
				                                <label for="name">Name</label>
				                                <input type="text" name="FullName" value="" size="40" class="form-control" id="name" placeholder="Type your name here" />
				                            </div>
				                            <div class="form-group">
				                                <label for="email">Email</label>
				                                <input type="email" name="Email" value="" size="40" class="form-control" id="email" placeholder="Type your email here" />
				                            </div>
				                            <div class="form-group">
				                                <label for="Phone">Phone</label>
				                                <input type="tel" name="Phone" value="" size="40" class="form-control" id="telephone" placeholder="Type your phone here" />
				                            </div>
				                        </div>
				                    </div>
				                    <div class="col-md-7">
				                        <div class="contact-form-right">
				                            <div class="form-group">
				                                <label for="Message">Message</label>
				                                <textarea name="Message" cols="40" rows="10" class="form-control" id="Message" placeholder="Type your message here"></textarea>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div class="row">
				                    <div class="col-md-6">
				                        <div class="form-group mb-0 form-check">
				                            <span class="wpcf7-form-control-wrap acceptance-921">
				                                <span class="wpcf7-form-control wpcf7-acceptance">
				                                    <span class="wpcf7-list-item">
				                                        <label>
				                                            <input type="checkbox" name="acceptance-921" value="1" aria-invalid="false" />
				                                            <span class="wpcf7-list-item-label">By ticking this box, I consent to Trufab Ltd. holding my information as defined in our <a href="/privacy-policy/">privacy policy.</a></span>
				                                        </label>
				                                    </span>
				                                </span>
				                            </span>
				                        </div>
				                    </div>
				                    <div class="col-md-6">
				                        <div class="submit-btn d-md-flex align-items-center justify-content-end">
				                            <input type="submit" value="submit" class="btn btn-primary" aria-invalid="false" />
				                            <span class="ajax-loader"></span>
				                        </div>
				                    </div>
				                </div>
				                <div class="row">
				                    <div class="col-md-12">
				                        <div class="query-heading">
				                            <div class="heading"><h2>Connect with us</h2></div>
				                        </div>
				                    </div>
				                </div>
				                <div class="row">
				                    <div class="col-md-3">
				                        <ul class="social-links">
				                            <li>
				                                <a href="#" target="_blank" rel="noopener"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
				                            </li>
				                            <li>
				                                <a href="#" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
				                            </li>
				                            <li>
				                                <a href="#" target="_blank" rel="noopener"><i class="fab fa-twitter-square" aria-hidden="true"></i></a>
				                            </li>
				                        </ul>
				                    </div>
				                    <div class="col-md-9 d-md-flex align-items-md-end justify-content-md-end">
				                        <ul class="query-list d-flex">
				                            <li>
				                                <div class="query-box">
				                                    <i class="fas fa-map-marker-alt"></i>
				                                    <p><a href="mailto:info@backsure.com">info@backsure.com</a></p>
				                                    <p><a href="tel:01132983489">0113 298 3489</a></p>
				                                </div>
				                            </li>
				                            <li>
				                                <div class="query-box">
				                                    <i class="fas fa-mobile-alt"></i>
				                                    Unit 17, Something Park Business Village, Somewhere, Here, AB1 2CD
				                                </div>
				                            </li>
				                        </ul>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
				<Pagination />
			</>
		);
	};
}
export default Contact;