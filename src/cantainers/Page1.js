import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Route, Switch } from 'react-router';

import L001 from "../components/learn/L001";
import L002 from "../components/learn/L002";
import L003 from "../components/learn/L003";
import L004 from "../components/learn/L004";
import L005 from "../components/learn/L005";
import L006 from "../components/learn/L006";
import L007 from "../components/learn/L007";
import L008 from "../components/learn/L008";
import L009 from "../components/learn/L009";
import L010 from "../components/learn/L010";
import L011 from "../components/learn/L011";
import L012 from "../components/learn/L012";
import L013 from "../components/learn/L013";
import L014 from "../components/learn/L014";
import L015 from "../components/learn/L015";
import L016 from "../components/learn/L016";
import L017 from "../components/learn/L017";
import L018 from "../components/learn/L018";
import L019 from "../components/learn/L019";
import L020 from "../components/learn/L020";
import L021 from "../components/learn/L021";
import L022 from "../components/learn/L022";
import L023 from "../components/learn/L023";
import L024 from "../components/learn/L024";
import L025 from "../components/learn/L025";

class Page1 extends Component {
    render() {
        return (
            <section>
                <h3>Page 1:</h3>
                <ul>
                    <li><Link to="/learn1/001">001 Rendering Elements</Link></li>
                    <li><Link to="/learn1/002">002 Components & Props</Link></li>
                    <li><Link to="/learn1/003">003 Components & Props</Link></li>
                    <li><Link to="/learn1/004">004 Timer & Lifecycle</Link></li>
                    <li><Link to="/learn1/005">005 Class</Link></li>
                    <li><Link to="/learn1/006">006 Events</Link></li>
                    <li><Link to="/learn1/007">007 Conditional Rendering</Link></li>
                    <li><Link to="/learn1/008">008 Conditional Rendering</Link></li>
                    <li><Link to="/learn1/009">009 Conditional Rendering</Link></li>
                    <li><Link to="/learn1/010">010 Conditional Rendering</Link></li>
                    <li><Link to="/learn1/011">011 Lists and Keys</Link></li>
                    <li><Link to="/learn1/012">012 Lists and Keys</Link></li>
                    <li><Link to="/learn1/013">013 Forms</Link></li>
                    <li><Link to="/learn1/014">014 Forms</Link></li>
                    <li><Link to="/learn1/015">015 Lifting State Up SpeedRadar (1)</Link></li>
                    <li><Link to="/learn1/016">016 Lifting State Up SpeedRadar (1)</Link></li>
                    <li><Link to="/learn1/017">017 Lifting State Up SpeedRadar (2)</Link></li>
                    <li><Link to="/learn1/018">018 Lifting State Up SpeedRadar (2)</Link></li>
                    <li><Link to="/learn1/019">019 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/020">020 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/021">021 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/022">022 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/023">023 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/024">024 Composition vs Inheritance</Link></li>
                    <li><Link to="/learn1/025">025 Thinking In React</Link></li>
                </ul>
                <hr/>
                <Switch>
                    <Route strict path="/learn1/001" component={L001}/>
                    <Route strict path="/learn1/002" component={L002}/>
                    <Route strict path="/learn1/003" component={L003}/>
                    <Route strict path="/learn1/004" component={L004}/>
                    <Route strict path="/learn1/005" component={L005}/>
                    <Route strict path="/learn1/006" component={L006}/>
                    <Route strict path="/learn1/007" component={L007}/>
                    <Route strict path="/learn1/008" component={L008}/>
                    <Route strict path="/learn1/009" component={L009}/>
                    <Route strict path="/learn1/010" component={L010}/>
                    <Route strict path="/learn1/011" component={L011}/>
                    <Route strict path="/learn1/012" component={L012}/>
                    <Route strict path="/learn1/013" component={L013}/>
                    <Route strict path="/learn1/014" component={L014}/>
                    <Route strict path="/learn1/015" component={L015}/>
                    <Route strict path="/learn1/016" component={L016}/>
                    <Route strict path="/learn1/017" component={L017}/>
                    <Route strict path="/learn1/018" component={L018}/>
                    <Route strict path="/learn1/019" component={L019}/>
                    <Route strict path="/learn1/020" component={L020}/>
                    <Route strict path="/learn1/021" component={L021}/>
                    <Route strict path="/learn1/022" component={L022}/>
                    <Route strict path="/learn1/023" component={L023}/>
                    <Route strict path="/learn1/024" component={L024}/>
                    <Route strict path="/learn1/025" component={L025}/>
                </Switch>
            </section>
        )
    }
}

export default Page1;