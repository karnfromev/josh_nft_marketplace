import React, { Component } from 'react';
import { withRouter,useLocation} from "react-router-dom";
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/sidebar";


const initData = {
    itemImg: "/img/ArticCamo.png",
    date: "2022-03-30",
    tab_1: "Bids",
    tab_2: "History",
    tab_3: "Details",
    ownerImg: "/img/avatar_1.jpg",
    itemOwner: "Themeland",
    created: "15 Jul 2021",
    title: "Artic Camo",
    content: "One of only 500 in game asset collectibles. Find this NFT as a secret in J.O.S.H maps.",
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

class ItemDetails extends Component {
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
            <section className="item-details-area" >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-info">
                                <div className="item-thumb text-center">
                                    <img src={this.props.location.state.img} alt="" style={{height:'520px',width:'500px'}}/>
                                </div>
                                {console.log(this.props.location.state.url)}
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 className="m-0">{this.props.location.state.title}</h1>
                                 <p>{this.state.initData.content}</p>
                                {/* Owner */}
                                
                                {/* Item Info List */}
                                <div className="item-info-list mt-4">
                                    <ul className="list-unstyled">
                                        <li className="price d-flex justify-content-between">
                                            <h5>Current Price {this.props.location.state.price}</h5>
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
                               
                                <a className="d-block btn btn-bordered-white mt-4" href={this.props.location.state.url}>{this.state.initData.btnText}</a>
                                
                                
                                {/* Netstorm Tab */}
                                
                                {/* Tab Content */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(ItemDetails);