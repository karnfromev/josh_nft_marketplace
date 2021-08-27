import React, { Component } from 'react';
import { withRouter} from "react-router-dom";


const initData = {
    itemImg: "/img/ArticCamo.png",
    url:"https://testnet.unique.one/token/ea674af5-2241-4f1a-988e-d36d44420b34/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    itemVid:"/img/NFT2.mp4",
    itemGif:"/img/ArticCamo.png",
    ethIcon:"/img/eth.png",
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
    count: "1 of 5",
    size: "14000 x 14000 px",
    volume: "64.1",
    highest_bid: "2.9 BNB",
    bid_count: "1 of 5",
    btnText: "Place a Bid"
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
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        seller: "Virtual Worlds",
        post: "Collection"
    }
]

class Spotlight extends Component {
    handleClick(img,title,url){
        this.props.history.push({pathname:'/item-details',state:{img :img,title:title,url:url}})
    }
    state = {
        initData: {},
        tabData_1: [],
        tabData_2: [],
        sellerData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            tabData_1: tabData_1,
            tabData_2: tabData_2,
            sellerData: sellerData
        })
    }
    render() {
        return (
            <section className="item-details-area">
                                <h1 style={{fontSize:'100px',color:'#57048A',paddingLeft:'330px'}}>Discover J.O.S.H Collectibles</h1>
                                

                <div className="container">

                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="item-spotlight">
                                <div className="item-thumb text-center">
                                
                                    <img src={this.state.initData.itemGif} style={{height:'520px',width:'500px'}}/>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    
                                    <div className="tab-pane fade" id="nav-contact">
                                        {/* Single Tab List */}
                                        <div className="owner-meta d-flex align-items-center mt-3">
                                            <span>Owner</span>
                                            <a className="owner d-flex align-items-center ml-2" href="/author">
                                                <img className="avatar-sm rounded-circle" src={this.state.initData.ownerImg} alt="" />
                                                <h6 className="ml-2">{this.state.initData.itemOwner}</h6>
                                            </a>
                                        </div>
                                        <p className="mt-2">Created : {this.state.initData.created}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            {/* Content */}
                            <div className="content mt-5 mt-lg-0">
                                <h1 style={{fontSize:'80px'}}>{this.state.initData.title}</h1>
                                <h4 style={{color:'white'}}>{this.state.initData.content}</h4>
                                <button className="btn btn-bordered-white btn-smaller mt-3" onClick={(e)=>this.handleClick(this.state.initData.itemGif,this.state.initData.title,this.state.initData.url)}><i className="icon-handbag mr-2" />Check it Out</button>
 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Spotlight);