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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
            <Switch>
                <Route strict exact path="/" component={Home} />
                    <Route path="/learn/001" component={L001}/>
                    <Route path="/learn/002" component={L002}/>
                    <Route path="/learn/003" component={L003}/>
                    <Route path="/learn/004" component={L004}/>
                    <Route path="/learn/005" component={L005}/>
                    <Route path="/learn/006" component={L006}/>
                    <Route path="/learn/007" component={L007}/>
                    <Route path="/learn/008" component={L008}/>
                    <Route path="/learn/009" component={L009}/>
                    <Route path="/learn/010" component={L010}/>
                    <Route path="/learn/011" component={L011}/>
                    <Route path="/learn/012" component={L012}/>
                    <Route path="/learn/013" component={L013}/>
                <Route strict exact path="/temp" component={Temp} />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
