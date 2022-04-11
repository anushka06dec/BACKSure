import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <>  
            <header id="header">
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        <div className="nav-inside d-flex align-items-center justify-content-between">
                            <Link className="navbar-brand" to="/">
                                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="BACKSure"/>
                            </Link>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="mainNav">
                                <div className="navbar-inside">
                                    <ul className="navbar-nav">
                                        <li className={splitLocation[1] === "your-business" ? "nav-item active" : "nav-item"}><Link className="nav-link" to="/your-business">Your Business</Link></li>
                                        <li className={splitLocation[1] === "what-we-do" ? "nav-item active" : "nav-item"}><Link className="nav-link" to="/what-we-do">WHAT WE DO</Link></li>
                                        <li className={splitLocation[1] === "what-we-get" ? "nav-item dropdown active" : "nav-item dropdown"}>
                                            <Link className="nav-link dropdown-toggle" id="about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/what-we-get">WHAT YOU GET</Link>
                                            <ul className="dropdown-menu" aria-labelledby="about">
                                                <li><Link className={splitLocation[1] === "tailored-solutions" ? "dropdown-item active" : "dropdown-item"} to="/tailored-solutions">TAILORED SOLUTIONS</Link></li>
                                                <li><Link className={splitLocation[1] === "effective-risk" ? "dropdown-item active" : "dropdown-item"} to="/effective-risk">Effective risk</Link></li>
                                                <li><Link className={splitLocation[1] === "claims-management" ? "dropdown-item active" : "dropdown-item"} to="/claims-management">Claims management</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="nav-inside-content d-block d-md-none text-center">
                                        <Link className="btn btn-default header-btn btn-block" to="/contact">TALK TO US</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-none d-md-block">
                                <Link className="btn btn-default header-btn" to="/contact">TALK TO US</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar