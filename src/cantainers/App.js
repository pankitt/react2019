import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../markup/scss/common.scss';

import { Route, Switch } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
            <Switch>
                <Route strict exact path="/" component={Home} />
                <Route strict path="/learn1" component={Page1} />
                <Route strict path="/learn2" component={Page2} />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
