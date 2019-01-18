import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className="page-home">
                <h3>Page 1:</h3>
                <ul>
                    <li><Link to="/learn/001">001 Rendering Elements</Link></li>
                    <li><Link to="/learn/002">002 Components & Props</Link></li>
                    <li><Link to="/learn/003">003 Components & Props</Link></li>
                    <li><Link to="/learn/004">004 Timer & Lifecycle</Link></li>
                    <li><Link to="/learn/005">005 Class</Link></li>
                    <li><Link to="/learn/006">006 Events</Link></li>
                    <li><Link to="/learn/007">007 Conditional Rendering</Link></li>
                    <li><Link to="/learn/008">008 Conditional Rendering</Link></li>
                    <li><Link to="/learn/009">009 Conditional Rendering</Link></li>
                    <li><Link to="/learn/010">010 Conditional Rendering</Link></li>
                    <li><Link to="/learn/011">011 Lists and Keys</Link></li>
                    <li><Link to="/learn/012">012 Forms</Link></li>
                    <li><Link to="/learn/013">013 Lists and Keys</Link></li>
                    <li><Link to="/learn/014">014 Lists and Keys</Link></li>
                    <li><Link to="/learn/015">015 Lifting State Up SpeedRadar (1)</Link></li>
                    <li><Link to="/learn/016">016 Lifting State Up SpeedRadar (1)</Link></li>
                    <li><Link to="/learn/017">017 Lifting State Up SpeedRadar (2)</Link></li>
                    <li><Link to="/learn/018">018 Lifting State Up SpeedRadar (2)</Link></li>
                    <li><Link to="/learn/019">019 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn/020">020 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn/021">021 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn/022">022 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn/023">023 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn/024">024 Composition vs Inheritance</Link></li>
                </ul>
                {this.props.children}
            </section>
        )
    }
}

export default Home;