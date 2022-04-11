import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Business extends Component {
    render() {
    return (
        <>
        <div className="content-container grey-bg block-container">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-10 offset-lg-1">
		                <ul className="block-list mobile-slider d-md-flex flex-md-wrap flex-md-row-reverse">
		                    <li className="block-item">
		                        <div className="block-box d-flex flex-column">
		                            <h3>What We Do</h3>
		                            <p>At BACKsure, our transport-specific industry experience enables us to successfully handle your insurance requirements and provide proactive and tailored advice delivered with integrity.</p>
		                            <div className="block-btn"><Link to="/what-we-do" className="btn btn-primary">FIND OUT MORE</Link></div>
		                        </div>
		                    </li>
		                    <li className="block-item">
		                        <div className="block-box d-flex flex-column">
		                            <h3>Your Business</h3>
		                            <p>
		                                You’re passionate about your business and so are we. At BACKsure we want to partner with you to understand your business, its processes and requirements so we can provide a truly bespoke, sector-specific
		                                solution.
		                            </p>
		                            <div className="block-btn"><Link to="/your-business" className="btn btn-primary">FIND OUT MORE</Link></div>
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
export default Business;