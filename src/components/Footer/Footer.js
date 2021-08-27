import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    socialData: res.data.socialData,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top" style={{paddingLeft:'20%'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Logo */}
                                    <a className="navbar-brand" href="https://www.evstudios.in/">
                                        <img className="navbar-brand-sticky" src="img/josh.png" alt="sticky brand-logo" style={{height:'90px',width:'100px/'}}/>
                                        <h4 style={{fontWeight:'bold'}}>Ekanomatic V studios</h4>
                                        <h6 style={{fontWeight:'bold'}}>Gaming Redefined</h6>
                                    </a>
                                     {/* Social Icons */}
                                    
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h3 className="footer-title">Community</h3>
                                    <ul>
                                    <a  href="https://www.facebook.com/evstudios.josh"><img src="https://img.icons8.com/ios/50/ffffff/facebook.png"/></a>
                                    <a  href="https://play.google.com/store/apps/details?id=in.evstudios.josh&hl=en_IN&gl=US"><img src="https://img.icons8.com/carbon-copy/100/ffffff/playstore.png"/></a>                                    
                                    <a  href="https://www.instagram.com/evstudios_josh/"><img src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"/></a>                                  
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title">Contact Us</h4>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form d-flex align-items-center">
                                        <a  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=admin@evstudios.in"><h5 style={{fontSize:'25px',fontWeight:'bold'}}>admin@evstudios.in</h5></a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left" style={{paddingLeft:'30%'}}>©2021 Ekanomatic V Studios, All Rights Reserved.</div>
                                    {/* Copyright Right */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;