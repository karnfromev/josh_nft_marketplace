import React, { Component } from 'react';

const initData = {
    pre_heading: "Payment",
    heading: "Get In Touch",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

class Contact extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                            {/* Item Form */}
                            <form id="contact-form" className="item-form card no-hover" method="POST" action="assets/php/mail.php">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="name" placeholder="Amount" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" placeholder="Card Number" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" placeholder="Expiry" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Message" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <h3>Billing Details</h3>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Card Holder Name" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Address Line 1" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Address Line 2" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Postal Code" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="City" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="District" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Country Code" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Phone" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" placeholder="Email" cols={30} rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit"><i className="icon-paper-plane mr-2" />Make Payment</button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-message" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;