import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Pagination extends Component {
    render() {
    return (
        <>
        	<div className="content-container grey-bg block-container">
	            <div className="container">
	                <div className="row">
	                    <div className="col-lg-10 offset-lg-1">
	                        <ul className="block-list mobile-slider d-md-flex flex-md-wrap">
	                            <li className="block-item">
	                                <div className="block-box d-flex flex-column">
	                                    <h3>Risk Management</h3>
	                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
	                                    <div className="block-btn"><Link to="/effective-risk" className="btn btn-primary">FIND OUT MORE</Link></div>
	                                </div>
	                            </li>
	                            <li className="block-item">
	                                <div className="block-box d-flex flex-column">
	                                    <h3>Tailored Solutions</h3>
	                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
	                                    <div className="block-btn"><Link to="/tailored-solutions" className="btn btn-primary">FIND OUT MORE</Link></div>
	                                </div>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </div>
        </>
    );
  }
}
export default Pagination;