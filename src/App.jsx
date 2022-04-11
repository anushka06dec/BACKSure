import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './/templates/home';
import Business from './/templates/your-business';
import Whatwedo from './/templates/what-we-do';
import Whatweget from './/templates/what-we-get';
import Tailoredsolutions from './/templates/tailored-solutions';
import Effectiverisk from './/templates/effective-risk';
import Claimsmanagement from './/templates/claims-management';
import Contact from './/templates/contact';
import Privacy from './/templates/privacy-policy';
import Cookie from './/templates/cookie-policy';
import Header from './_partials/Header';
import Footer from './_partials/Footer';
function App() {
  return(
      <>
       <Router>
            <Header />
            <Switch>
                <Route path="/your-business">
                    <Business />
                </Route>
                <Route path="/what-we-do">
                    <Whatwedo />
                </Route>
                <Route path="/what-we-get">
                    <Whatweget />
                </Route>
                <Route path="/tailored-solutions">
                    <Tailoredsolutions />
                </Route>
                <Route path="/effective-risk">
                    <Effectiverisk />
                </Route> 
                <Route path="/claims-management">
                    <Claimsmanagement />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/privacy-policy">
                    <Privacy />
                </Route> 
                <Route path="/cookie-policy">
                    <Cookie />
                </Route>
               
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
      </>    
  );
}
export default App;
