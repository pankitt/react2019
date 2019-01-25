import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import { Route, Switch } from 'react-router';

import L001 from "../components/learn2/L001";
import L002 from "../components/learn2/L002";
import L003 from "../components/learn2/L003";
import L004 from "../components/learn2/L004";
import L005 from "../components/learn2/L005";
import L006 from "../components/learn2/L006";
import L007 from "../components/learn2/L007";
import L008 from "../components/examples/01_сontext";
import L009 from "../components/examples/02_context";
import L010 from "../components/learn2/L010";
import L011 from "../components/learn2/L011";
import L012 from "../components/learn2/L012";
import L013 from "../components/learn2/L013";
import L014 from "../components/learn2/L014";
import L015 from "../components/learn2/L015";
import L016 from "../components/learn2/L016";
import L017 from "../components/learn2/L017";
import L018 from "../components/learn2/L018";
import L019 from "../components/learn2/L019";

class Page2 extends Component {
    render() {
        return (
            <section>
                <h3>Page 2:</h3>
                <ul>
                    <li><NavLink to="/learn2/001" activeClassName="active">001 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/002" activeClassName="active">002 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/003" activeClassName="active">003 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/004" activeClassName="active">004 Accessibility (for mouse)</NavLink></li>
                    <li><NavLink to="/learn2/005" activeClassName="active">005 Accessibility (for key)</NavLink></li>
                    <li><NavLink to="/learn2/006" activeClassName="active">006 Context (without)</NavLink></li>
                    <li><NavLink to="/learn2/007" activeClassName="active">007 Context (with)</NavLink></li>
                    <li><NavLink to="/learn2/008" activeClassName="active">008 Context Examples (Dynamic Context)</NavLink></li>
                    <li><NavLink to="/learn2/009" activeClassName="active">009 Context Examples (Nested Component)</NavLink></li>
                    <li><NavLink to="/learn2/010" activeClassName="active">010 Context Examples (Multiple Contexts)</NavLink></li>
                    <li><NavLink to="/learn2/011" activeClassName="active">011 Error Boundaries (--Error--)</NavLink></li>
                    <li><NavLink to="/learn2/012" activeClassName="active">012 Forwarding Refs</NavLink></li>
                    <li><NavLink to="/learn2/013" activeClassName="active">013 Forwarding Refs (--Error--)</NavLink></li>
                    <li><NavLink to="/learn2/014" activeClassName="active">014 Fragments (001, 002)</NavLink></li>
                    <li><NavLink to="/learn2/015" activeClassName="active">015 DOM Examples</NavLink></li>
                    <li><NavLink to="/learn2/016" activeClassName="active">016 JSX In Depth</NavLink></li>
                    <li><NavLink to="/learn2/017" activeClassName="active">017 Optimizing Performance (shouldComponentUpdate())</NavLink></li>
                    <li><NavLink to="/learn2/018" activeClassName="active">018 Optimizing Performance (PureComponent)</NavLink></li>
                    <li><NavLink to="/learn2/019" activeClassName="active">019 Optimizing Performance Examples (PureComponent)</NavLink></li>
                </ul>
                <hr/>
                <Switch>
                    <Route strict path="/learn2/001" component={L001}/>
                    <Route strict path="/learn2/002" component={L002}/>
                    <Route strict path="/learn2/003" component={L003}/>
                    <Route strict path="/learn2/004" component={L004}/>
                    <Route strict path="/learn2/005" component={L005}/>
                    <Route strict path="/learn2/006" component={L006}/>
                    <Route strict path="/learn2/007" component={L007}/>
                    <Route strict path="/learn2/008" component={L008}/>
                    <Route strict path="/learn2/009" component={L009}/>
                    <Route strict path="/learn2/010" component={L010}/>
                    <Route strict path="/learn2/011" component={L011}/>
                    <Route strict path="/learn2/012" component={L012}/>
                    <Route strict path="/learn2/013" component={L013}/>
                    <Route strict path="/learn2/014" component={L014}/>
                    <Route strict path="/learn2/015" component={L015}/>
                    <Route strict path="/learn2/016" component={L016}/>
                    <Route strict path="/learn2/017" component={L017}/>
                    <Route strict path="/learn2/018" component={L018}/>
                    <Route strict path="/learn2/019" component={L019}/>
                </Switch>
            </section>
        )
    }
}

export default Page2;