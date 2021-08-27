import React, { Component } from 'react';
import { Link, Switch, Route, useHistory, useLocation } from "react-router-dom";


const initData = {
    pre_heading: "Explore",
    heading: "Exclusive Digital Assets",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    filter_1: "All",
    filter_2: "Gaming Assets",
    filter_3: "Collectibles",
}
const handleEnrollCoursePage = (img,title) => { 
    this.props.history.push({
       pathname:"/item-details",
       state:{
           title:title,
           img:img
       },
   })

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
        btnText: "Check it Out"
    },
    {
        id: "2",
        img: "/img/Guanacodesert.jpg",
        group: '["Collectibles"]',
        title: "Guanaco Desert",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "3",
        img: "/img/UnlimitedCoinGlitch.png",
        group: '["Collectibles"]',
        title: "Unlimited Coin Glitch",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "3",
        img: "/img/joshcover.gif",
        group: '["Collectibles"]',
        title: "Josh Cover",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "4",
        img: "/img/khrool.jpg",
        group: '["Collectibles"]',
        title: "Khrool",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "5",
        img: "/img/joshrevolution.gif",
        group: '["Collectibles"]',
        title: "Josh Revolution",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "6",
        img: "/img/dock.jpg",
        group: '["Collectibles"]',
        title: "Dock",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "7",
        img: "/img/warehouse.jpg",
        group: '["Collectibles"]',
        title: "Warehouse",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "8",
        img: "/img/joshbattleroyale.gif",
        group: '["Collectibles"]',
        title: "J.O.S.H Battle Royale",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "9",
        img: "/img/ToxiCamo.png",
        group: '["Gaming Assets"]',
        title: "Toxi Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "10",
        img: "/img/ToxxiCamo.png",
        group: '["Gaming Assets"]',
        title: "Toxii Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "11",
        img: "/img/UrbanCamo.png",
        group: '["Gaming Assets"]',
        title: "Urban Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },{
        id: "12",
        img: "/img/Patriot.png",
        group: '["Gaming Assets"]',
        title: "Partriot",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "13",
        img: "/img/ArticCamo.png",
        group: '["Gaming Assets"]',
        title: "Artic Camo",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    }
]

class ExploreThree extends Component {
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
                                <p>{this.state.initData.content}</p>
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
                                <label className="btn d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="art" className="explore-btn" />
                                    <span>{this.state.initData.filter_2}</span>
                                </label>
                                <label className="btn d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="music" className="explore-btn" />
                                    <span>{this.state.initData.filter_3}</span>
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
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/item-details"><i className="icon-handbag mr-2" />{item.btnText}</a>

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

export default ExploreThree;