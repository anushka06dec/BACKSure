import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

function Footer() {
  return (
        <>  
        
    	<footer id="footer">
            <div className="footer-upper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-upper-content">
                                <ul className="social-links">
                                    <li>
                                        <a className="footer-logo" href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a className="footer-logo" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a className="footer-logo" href="https://twitter.com/" target="_blank" rel="noopener"><i className="fab fa-twitter-square" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                                <Link className="footer-logo" to="/">
                                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt="BACKSure"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <ul className="footer-query-list d-flex">
                                <li>
                                    <div className="footer-query-box">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p><a href="mailto:info@backsure.com">info@backsure.com</a></p>
                                        <p><a href="tel:01132983489">0113 298 3489</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-query-box">
                                        <i className="fas fa-mobile-alt"></i>
                                        Olympus House, Unit 2, Howley Park <br />
                                        Business Village, Morley, Leeds, LS27 0BZ
                                    </div>
                                </li>
                            </ul>
                            <p>
                                Backsure Ltd is an appointed representative of McCarron Coates Ltd who are authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 940003. You may check this on the Financial
                                Services Register by visiting the FCA website www.fca.gov.uk/register/ or by contacting the FCA on 0800 111 6768. Backsure Ltd is Registered in England & Wales. Registered office Unit 17, Howley Park Business
                                Village, Morley, Leeds, LS27 0BZ. Company registered number: 13253844
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-md-flex flex-md-row-reverse align-items-md-center justify-content-md-between">
                            <ul className="footer-nav d-flex align-items-center">
                                <li><Link to="/privacy-policy">PRIVACY</Link></li>
                                <li><Link to="/cookie-policy"> COOKIE POLICY</Link></li>
                            </ul>
                            <div className="copyright">© BACKSURE 2021. Website by <a href="#!">EQ.</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       
        </>
  );
}

export default Footer;