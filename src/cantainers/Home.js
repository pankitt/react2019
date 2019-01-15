import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className="page-home">
                <h3>list:</h3>
                {this.props.children}
                <ul>
                    <li><Link to="/learn/001" className="">001</Link></li>
                    <li><Link to="/learn/002" className="">002</Link></li>
                    <li><Link to="/learn/003" className="">003</Link></li>
                </ul>
            </section>
        )
    }
}

export default Home;