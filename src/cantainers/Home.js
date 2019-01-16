import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className="page-home">
                <h3>list:</h3>
                {this.props.children}
                <ul>
                    <li><Link to="/learn/001" className="">001 Rendering Elements</Link></li>
                    <li><Link to="/learn/002" className="">002 Components & Props</Link></li>
                    <li><Link to="/learn/003" className="">003 Components & Props</Link></li>
                    <li><Link to="/learn/004" className="">004 Timer & Lifecycle</Link></li>
                    <li><Link to="/learn/005" className="">005 Class</Link></li>
                    <li><Link to="/learn/006" className="">006 Events</Link></li>
                    <li><Link to="/learn/007" className="">007 Conditional Rendering</Link></li>
                    <li><Link to="/learn/008" className="">008 Conditional Rendering</Link></li>
                    <li><Link to="/learn/009" className="">009 Conditional Rendering</Link></li>
                    <li><Link to="/learn/010" className="">010 Conditional Rendering</Link></li>
                    <li><Link to="/learn/011" className="">011 Lists and Keys</Link></li>
                    <li><Link to="/learn/012" className="">012 Forms</Link></li>
                    <li><Link to="/learn/013" className="">013 Lists and Keys</Link></li>
                </ul>
            </section>
        )
    }
}

export default Home;