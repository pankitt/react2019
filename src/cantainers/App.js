import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../markup/scss/common.scss';

import { Route, Switch } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Temp from './Temp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
            <Switch>
                <Route strict exact path="/" component={Home}/>
                <Route strict exact path="/temp" component={Temp} />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
