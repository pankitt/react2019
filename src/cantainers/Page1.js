import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import { Route, Switch } from 'react-router';

import L001 from "../components/learn1/L001";
import L002 from "../components/learn1/L002";
import L003 from "../components/learn1/L003";
import L004 from "../components/learn1/L004";
import L005 from "../components/learn1/L005";
import L006 from "../components/learn1/L006";
import L007 from "../components/learn1/L007";
import L008 from "../components/learn1/L008";
import L009 from "../components/learn1/L009";
import L010 from "../components/learn1/L010";
import L011 from "../components/learn1/L011";
import L012 from "../components/learn1/L012";
import L013 from "../components/learn1/L013";
import L014 from "../components/learn1/L014";
import L015 from "../components/learn1/L015";
import L016 from "../components/learn1/L016";
import L017 from "../components/learn1/L017";
import L018 from "../components/learn1/L018";
import L019 from "../components/learn1/L019";
import L020 from "../components/learn1/L020";
import L021 from "../components/learn1/L021";
import L022 from "../components/learn1/L022";
import L023 from "../components/learn1/L023";
import L024 from "../components/learn1/L024";
import L025 from "../components/learn1/L025";
import L026 from "../components/learn1/L026";

class Page1 extends Component {
    render() {
        return (
            <section>
                <h3>Page 1:</h3>
                <ul>
                    <li><NavLink to="/learn1/001" activeClassName="active">001 Rendering Elements</NavLink></li>
                    <li><NavLink to="/learn1/002" activeClassName="active">002 Components & Props</NavLink></li>
                    <li><NavLink to="/learn1/003" activeClassName="active">003 Components & Props</NavLink></li>
                    <li><NavLink to="/learn1/004" activeClassName="active">004 Timer & Lifecycle</NavLink></li>
                    <li><NavLink to="/learn1/005" activeClassName="active">005 Class</NavLink></li>
                    <li><NavLink to="/learn1/006" activeClassName="active">006 Events</NavLink></li>
                    <li><NavLink to="/learn1/007" activeClassName="active">007 Conditional Rendering</NavLink></li>
                    <li><NavLink to="/learn1/008" activeClassName="active">008 Conditional Rendering</NavLink></li>
                    <li><NavLink to="/learn1/009" activeClassName="active">009 Conditional Rendering</NavLink></li>
                    <li><NavLink to="/learn1/010" activeClassName="active">010 Conditional Rendering</NavLink></li>
                    <li><NavLink to="/learn1/011" activeClassName="active">011 Lists and Keys</NavLink></li>
                    <li><NavLink to="/learn1/012" activeClassName="active">012 Lists and Keys</NavLink></li>
                    <li><NavLink to="/learn1/013" activeClassName="active">013 Forms</NavLink></li>
                    <li><NavLink to="/learn1/014" activeClassName="active">014 Forms</NavLink></li>
                    <li><NavLink to="/learn1/015" activeClassName="active">015 Lifting State Up SpeedRadar (1)</NavLink></li>
                    <li><NavLink to="/learn1/016" activeClassName="active">016 Lifting State Up SpeedRadar (1)</NavLink></li>
                    <li><NavLink to="/learn1/017" activeClassName="active">017 Lifting State Up SpeedRadar (2)</NavLink></li>
                    <li><NavLink to="/learn1/018" activeClassName="active">018 Lifting State Up SpeedRadar (2)</NavLink></li>
                    <li><NavLink to="/learn1/019" activeClassName="active">019 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/020" activeClassName="active">020 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/021" activeClassName="active">021 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/022" activeClassName="active">022 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/023" activeClassName="active">023 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/024" activeClassName="active">024 Composition vs Inheritance</NavLink></li>
                    <li><NavLink to="/learn1/025" activeClassName="active">025 Thinking In React</NavLink></li>
                    <li><NavLink to="/learn1/026" activeClassName="active">026 Thinking In React</NavLink></li>
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
                    <Route strict path="/learn1/026" component={L026}/>
                </Switch>
            </section>
        )
    }
}

export default Page1;