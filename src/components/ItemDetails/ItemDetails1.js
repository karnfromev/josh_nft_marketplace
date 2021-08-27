import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/sidebar";


const initData = {
    itemImg: "/img/nft22.gif",
    date: "2022-03-30",
    tab_1: "Bids",
    tab_2: "History",
    tab_3: "Details",
    ownerImg: "/img/avatar_1.jpg",
    itemOwner: "Themeland",
    created: "15 Jul 2021",
    title: "Walking Ahead",
    content: "Never give in, never give in, never, never, never, never—in nothing, great or small, large or petty.",
    price_1: "1.5 ETH",
    price_2: "$500.89",
    count: "#1 / 5",
    size: "14000 x 14000 px",
    volume: "64.1",
    highest_bid: "2.9 BNB",
    bid_count: "#1 / 5",
    btnText: "Buy Now"
}



const tabData_1 = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        price: "14 ETH",
        time: "4 hours ago",
        author: "@arham"
    },
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        price: "10 ETH",
        time: "8 hours ago",
        author: "@junaid"
    },
    {
        id: "3",
        img: "/img/avatar_3.jpg",
        price: "12 ETH",
        time: "3 hours ago",
        author: "@yasmin"
    }
]

const tabData_2 = [
    {
        id: "1",
        img: "/img/avatar_6.jpg",
        price: "32 ETH",
        time: "10 hours ago",
        author: "@hasan"
    },
    {
        id: "2",
        img: "/img/avatar_7.jpg",
        price: "24 ETH",
        time: "6 hours ago",
        author: "@artnox"
    },
    {
        id: "3",
        img: "/img/avatar_8.jpg",
        price: "29 ETH",
        time: "12 hours ago",
        author: "@meez"
    }
]

const sellerData = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        seller: "@ArtNoxStudio",
        post: "Creator"
    },
]

class ItemDetails1 extends Component {
    state = {
        initData: {},
        tabData_1: [],
        tabData_2: [],
        sellerData: [],
        data: {},
        widgetData_1: [],
        widgetData_2: [],
        widgetData_3: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            tabData_1: tabData_1,
            tabData_2: tabData_2,
            sellerData: sellerData
        })
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2,
                    widgetData_3: res.data.widgetData_3
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={this.state.initData.itemImg} alt="" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 className="m-0">{this.state.initData.title}</h1>
                                 <p>{this.state.initData.content}</p>
                                {/* Owner */}
                                
                                {/* Item Info List */}
                                <div className="item-info-list mt-4">
                                    <ul className="list-unstyled">
                                        <li className="price d-flex justify-content-between">
                                            <h5>Current Price {this.state.initData.price_1}</h5>
                                        </li>
                                        <li><h3>Volume Traded </h3>
                                            <h6>{this.state.initData.volume}</h6>
                                        </li>
                                    </ul>
                                </div>
                                <div className="item widget-share-this">
                            <h4 className="title">{this.state.data.widgetTitle_3}</h4>
                            <ul className="navbar-nav social share-list">
                                {this.state.widgetData_3.map((item, idx) => {
                                    return (
                                        <li key={`wdth_${idx}`} className="nav-item">
                                            <a href="#" className="nav-link"><i className={item.icon} /></a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                               
                                <a className="d-block btn btn-bordered-white mt-4" href="/wallet-connect">{this.state.initData.btnText}</a>
                                
                                
                                {/* Netstorm Tab */}
                                
                                {/* Tab Content */}
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade" id="nav-profile">
                                        <ul className="list-unstyled">
                                            {/* Single Tab List */}
                                            {this.state.tabData_2.map((item, idx) => {
                                                return (
                                                    <li key={`tdt_${idx}`} className="single-tab-list d-flex align-items-center">
                                                        <img className="avatar-sm rounded-circle mr-3" src={item.img} alt="" />
                                                        <p className="m-0">Bid listed for <strong>{item.price}</strong> {item.time} <br />by <a href="/author">{item.author}</a></p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ItemDetails1;