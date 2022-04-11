import React, { Component } from 'react';
import Helmet from 'react-helmet';
class Cookie extends Component {
    render() {
    const TITLE = 'BACKSure - Cookie Policy'
    return (
        <>  
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
        	<div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h3>Cookie Policy</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a justo dignissim, vulputate nibh vitae, rhoncus nulla. Fusce eu nulla odio. Pellentesque sed nisi odio. Vestibulum ut ornare sapien. Etiam rhoncus mauris
                                vitae velit viverra, sed fermentum sem accumsan. Nulla sed tellus maximus, ornare lorem quis, porttitor risus. Quisque molestie diam vitae pretium pharetra. Sed tincidunt leo ut ultrices fermentum. Cras quis vehicula
                                velit. Praesent eleifend neque orci. Mauris iaculis dui ipsum, et cursus diam tincidunt euismod. Sed sit amet metus at magna scelerisque placerat. Cras vitae dui pharetra, scelerisque diam a, ultrices elit. Duis volutpat
                                odio posuere turpis faucibus porta. Pellentesque vel dolor vestibulum, efficitur velit et, volutpat erat. Aenean egestas lorem et egestas pulvinar.
                            </p>
                            <p>
                                Praesent et urna leo. Morbi urna arcu, egestas eget neque ultricies, finibus suscipit odio. Pellentesque tristique rhoncus bibendum. Phasellus luctus varius diam vitae venenatis. Nulla pulvinar turpis ut odio euismod
                                sodales eu in ligula. Praesent finibus risus id lacinia rhoncus. Proin dui ante, lobortis in ex vel, aliquam ultricies diam.
                            </p>
                            <p>
                                Curabitur hendrerit, eros et imperdiet condimentum, dolor eros tristique lacus, quis volutpat ligula odio sed nisl. Cras luctus dolor eu ornare viverra. Fusce tincidunt magna sed libero congue, at tempor neque fermentum.
                                Quisque commodo justo justo, id ultrices nisi elementum vel. Vestibulum quis mi massa. Nam ut fermentum nulla, vitae viverra libero. Maecenas ut iaculis lorem. Donec velit dui, sollicitudin id dui quis, finibus iaculis
                                neque. Suspendisse potenti. Donec at lorem ex. Proin gravida vel magna eu sodales. Fusce eget ullamcorper orci.
                            </p>
                            <p>
                                Aliquam erat volutpat. Integer non gravida odio, non convallis nibh. Sed congue pharetra enim non pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
                                condimentum, urna sit amet condimentum laoreet, quam est imperdiet enim, mattis faucibus magna nulla sed risus. Proin vestibulum tortor a tellus posuere, a luctus neque dictum. Ut feugiat auctor vulputate.
                            </p>
                            <p>
                                Phasellus sed quam nec metus sagittis tincidunt vel nec dolor. Maecenas faucibus metus quis nisi mattis, eget aliquam massa tincidunt. Nunc ac commodo elit. Proin placerat ipsum sit amet lectus porttitor, sed hendrerit
                                lacus gravida. Phasellus ornare tempor nunc, eget dapibus mauris suscipit eu. Vivamus gravida, velit ac consequat eleifend, quam velit blandit massa, eget semper dui dolor et est. Maecenas malesuada volutpat ornare.
                                Integer interdum, erat ac rhoncus elementum, nulla purus laoreet elit, at accumsan mi nibh rutrum arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
  }
}
export default Cookie;