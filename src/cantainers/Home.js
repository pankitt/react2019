import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section>
                <h3>Pages:</h3>
                <ul>
                    <li><Link to="/learn1">Page 1</Link></li>
                    <li><Link to="/learn2">Page 2</Link></li>
                </ul>
            </section>
        )
    }
}

export default Home;