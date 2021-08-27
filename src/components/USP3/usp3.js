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
                <h1>THIS IS THE NEW CREATIVE ECONOMY.</h1>

                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span></span>
                                    <h3 className="mt-3 mb-0">We're bringing gaming enthusiasts ,crypto natives and collectors together to move the culture forward.</h3>
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