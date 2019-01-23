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

class Page2 extends Component {
    render() {
        return (
            <section>
                <h3>Page 2:</h3>
                <ul>
                    <li><NavLink to="/learn2/001" activeClassName="active">001 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/002" activeClassName="active">002 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/003" activeClassName="active">002 Accessibility</NavLink></li>
                    <li><NavLink to="/learn2/004" activeClassName="active">004 Accessibility (for mouse)</NavLink></li>
                    <li><NavLink to="/learn2/005" activeClassName="active">005 Accessibility (for key)</NavLink></li>
                    <li><NavLink to="/learn2/006" activeClassName="active">006 Context (without)</NavLink></li>
                    <li><NavLink to="/learn2/007" activeClassName="active">007 Context (with)</NavLink></li>
                    <li><NavLink to="/learn2/008" activeClassName="active">008 Context Examples (Dynamic Context)</NavLink></li>
                    <li><NavLink to="/learn2/009" activeClassName="active">009 Context Examples (Nested Component)</NavLink></li>
                    <li><NavLink to="/learn2/010" activeClassName="active">010 Context Examples (Multiple Contexts)</NavLink></li>
                    <li><NavLink to="/learn2/011" activeClassName="active">011 Error Boundaries</NavLink></li>
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
                </Switch>
            </section>
        )
    }
}

export default Page2;