import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

class Work extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    workData: res.data.workData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span style={{fontSize:'120px'}}>{this.state.data.preHeading}</span>
                                    <h2 className="mt-3 mb-0" style={{fontSize:'80px'}}>{this.state.data.heading}</h2>
                                    <h3 className="mt-3 mb-0" style={{fontSize:'55px'}}>Collect from a wide range of Gaming assets as well as Collectibles now available as NFTs</h3>
                                    <h4 className="mt-3 mb-0" style={{fontSize:'35px'}}>Use them in the J.O.S.H just by connecting to your wallet to it!*</h4>
                                    <h2></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Work;