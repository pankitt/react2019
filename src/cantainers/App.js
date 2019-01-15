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
                <Route strict exact path="/temp" component={Temp} />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
