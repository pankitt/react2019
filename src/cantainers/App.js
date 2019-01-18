import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../markup/scss/common.scss';

import { Route, Switch } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Temp from './Temp';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
            <Switch>
                <Route strict exact path="/" component={Home} />
                    <Route strict path="/learn/001" component={L001}/>
                    <Route strict path="/learn/002" component={L002}/>
                    <Route strict path="/learn/003" component={L003}/>
                    <Route strict path="/learn/004" component={L004}/>
                    <Route strict path="/learn/005" component={L005}/>
                    <Route strict path="/learn/006" component={L006}/>
                    <Route strict path="/learn/007" component={L007}/>
                    <Route strict path="/learn/008" component={L008}/>
                    <Route strict path="/learn/009" component={L009}/>
                    <Route strict path="/learn/010" component={L010}/>
                    <Route strict path="/learn/011" component={L011}/>
                    <Route strict path="/learn/012" component={L012}/>
                    <Route strict path="/learn/013" component={L013}/>
                    <Route strict path="/learn/014" component={L014}/>
                    <Route strict path="/learn/015" component={L015}/>
                    <Route strict path="/learn/016" component={L016}/>
                    <Route strict path="/learn/017" component={L017}/>
                    <Route strict path="/learn/018" component={L018}/>
                    <Route strict path="/learn/019" component={L019}/>
                    <Route strict path="/learn/020" component={L020}/>
                    <Route strict path="/learn/021" component={L021}/>
                    <Route strict path="/learn/022" component={L022}/>
                    <Route strict path="/learn/023" component={L023}/>
                    <Route strict path="/learn/024" component={L024}/>
                <Route strict exact path="/temp" component={Temp} />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
