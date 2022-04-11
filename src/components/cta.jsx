import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class CTA extends Component{
	render() {
    const backIcon = `${process.env.PUBLIC_URL}/include/images/back-icon.svg`;
    return (
        <>
        <div className="cta-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cta-box d-md-flex align-items-center justify-content-between">
                            <h4>
                                We would love to chat. <Link to="/contact" className="back-icon"><img src={backIcon} alt="back-icon" /></Link> Speaking your language.
                            </h4>
                            <Link to="/contact" className="btn btn-default">TALK TO US</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );}
}
export default CTA;