import React, { Component } from 'react';
import {Cotainer} from 'react-bootstrap';
import josh from '../josh.png'

const initData = {
    pre_heading: "NetStorm",
    heading: "Discover, collect, and sell extraordinary NFTs",
    content: "Explore on the world's best & largest NFT marketplace",
    btn_1: "Explore",
    btn_2: "Create"
}

class Hero extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section className="hero-section">
                  <div>
                    <div className="row">
                        <div style={{marginLeft:'60px',marginTop:'40px'}}>
                        <span style={{fontSize:'30px'}}>Ekanomatic V studios</span>
                        <div></div>
                        <span style={{fontSize:'20px'}}>Gaming Rededfined</span>
                            <h1 style={{fontSize:'142px',color:'#57048A'}}>DISCOVER, COLLECT and SELL EXTRAORDINARY J.O.S.H NFTs</h1>
                            {/* Buttons */}
                            <div className="button-group" style={{paddingTop:'30px'}}>
                                <a className="btn btn-bordered-white" href="/explore-2"><i className="icon-rocket mr-2"/>{this.state.data.btn_1}</a>
                             </div>
                        </div>
                    </div>
                </div>
                {/* Shape */}
                <div className="shape">
                  
                </div>
            </section>
        );
    }
}

export default Hero;