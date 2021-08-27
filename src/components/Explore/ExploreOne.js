import React, { Component } from 'react';
import history from '../../history';
import { withRouter} from "react-router-dom";

const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/Coatofarms.gif",
        group: '["art","sports"]',
        title: "Coat of Arms",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "2",
        img: "/img/Guanacodesert.jpg",
        group: '["art","music"]',
        title: "Guanaco Desert",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "3",
        img: "/img/joshcover.gif",
        group: '["sports","art","music"]',
        title: "Josh Cover",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "4",
        img: "/img/khrool.jpg",
        group: '["music","sports","collectibles"]',
        title: "Khrool",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "5",
        img: "/img/joshrevolution.gif",
        group: '["art","sports"]',
        title: "Josh Revolution",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "6",
        img: "/img/dock.jpg",
        group: '["art","music"]',
        title: "Dock",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "7",
        img: "/img/warehouse.jpg",
        group: '["music","sports","collectibles"]',
        title: "Warehouse",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    },
    {
        id: "8",
        img: "/img/joshbattleroyale.gif",
        group: '["music","sports","collectibles"]',
        title: "J.O.S.H Battle Royale",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Check it Out"
    }
]

class ExploreOne extends Component {
    handleClick(img,title){
        this.props.history.push({pathname:'/item-details',state:{img :img,title:title}})
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
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/explore-2">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                <button className="btn btn-bordered-white btn-smaller mt-3" onClick={(e)=>this.handleClick(item.img,item.title)}><i className="icon-handbag mr-2" />{item.btnText}</button>
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

export default withRouter(ExploreOne);