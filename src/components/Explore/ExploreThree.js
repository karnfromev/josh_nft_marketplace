import React, { Component } from 'react';
import {  withRouter } from "react-router-dom";


const initData = {
    pre_heading: "Explore",
    heading: "Exclusive Digital Assets",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    filter_1: "All",
    filter_2: "Gaming Assets",
    filter_3: "Collectibles",
}


const data = [
    {
        id: "1",
        img: "/img/Coatofarms.gif",
        group: '["Collectibles"]',
        title: "Coat of Arms",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/69489762-e09d-4200-8d3c-639b084b7f69/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "2",
        img: "/img/Guanacodesert.jpg",
        group: '["Collectibles"]',
        title: "Guanaco Desert",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/profile/karn",
    },
    {
        id: "3",
        img: "/img/UnlimitedCoinGlitch.png",
        group: '["Collectibles"]',
        title: "Unlimited Coin Glitch",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/862d7ae9-f623-4a6b-99e3-e021c1209288/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "4",
        img: "/img/joshcover.gif",
        group: '["Collectibles"]',
        title: "J.O.S.H Cover",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/profile/karn",
    },
    {
        id: "5",
        img: "/img/khrool.jpg",
        group: '["Collectibles"]',
        title: "Khrool",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/profile/karn",
    },
    {
        id: "6",
        img: "/img/joshrevolution.gif",
        group: '["Collectibles"]',
        title: "J.O.S.H Revolution",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/50bb169b-595c-4e31-a9ee-a11f844b71d2/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "7",
        img: "/img/dock.jpg",
        group: '["Collectibles"]',
        title: "Dock",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"",
    },
    {
        id: "8",
        img: "/img/warehouse.jpg",
        group: '["Collectibles"]',
        title: "Warehouse",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/profile/karn",
    },
    {
        id: "8",
        img: "/img/joshbattleroyale.gif",
        group: '["Collectibles"]',
        title: "J.O.S.H Battle Royale",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/profile/karn",
    },
    {
        id: "9",
        img: "/img/ToxiCamo.png",
        group: '["Gaming Assets"]',
        title: "Toxi Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/4910c33b-255c-4088-8089-d4d757ccc081/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "10",
        img: "/img/ToxxiCamo.png",
        group: '["Gaming Assets"]',
        title: "Toxii Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/c562e92b-33e8-4358-ba0f-8e4363ff45bb/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "11",
        img: "/img/UrbanCamo.png",
        group: '["Gaming Assets"]',
        title: "Urban Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/68baaacf-da57-4e43-abbb-f6b024c5be69/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },{
        id: "12",
        img: "/img/Patriot.png",
        group: '["Gaming Assets"]',
        title: "Partriot",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/aeb9cc52-d61c-4b9b-97c2-2273d0fd0db5/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    },
    {
        id: "13",
        img: "/img/ArticCamo.png",
        group: '["Gaming Assets"]',
        title: "Artic Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out",
        url:"https://testnet.unique.one/token/ea674af5-2241-4f1a-988e-d36d44420b34/0xB7d3F52d828006451CE660CB6324b5f85AD26107",
    }
]

class ExploreThree extends Component {
    handleClick(img,title,url){
        this.props.history.push({pathname:'/item-details',state:{img :img,title:title,url:url}})
    }
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    

    render() {
        return (
            <section className="explore-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center mb-4">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                             </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            {/* Explore Menu */}
                            <div className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4" data-toggle="buttons">
                                <label className="btn active d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="all" defaultChecked className="explore-btn" />
                                    <span>{this.state.initData.filter_1}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row items explore-items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`edth_${idx}`} className="col-12 col-sm-6 col-lg-4 item explore-item" data-groups={item.group}>
                                    <div className="card">
                                        <div className="image-over">
                                                <img className="card-img-top" src={item.img} alt="" />
                                 
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                            
                                                    <h5 className="mb-0">{item.title}</h5>
                                                
                                                
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                <button className="btn btn-bordered-white btn-smaller mt-3" onClick={(e)=>this.handleClick(item.img,item.title,item.url)}><i className="icon-handbag mr-2" />Check it Out</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(ExploreThree);