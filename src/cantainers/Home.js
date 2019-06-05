import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';

import PageOne from '../components/home/PageOne';
import PageTwo from '../components/home/PageTwo';

class Home extends Component {
    render() {
        return (
            <section>
                {/*<h3>Pages:</h3>
                <ul>
                    <li><Link to="/learn1">Page 1</Link></li>
                    <li><Link to="/learn2">Page 2</Link></li>
                </ul>*/}
                <hr/>
                <div>
                    Inner Pages:
                    <ul>
                        <li><Link to="/">Page One</Link></li>
                        <li><Link to="/two">Page Two</Link></li>
                    </ul>
                    <div>
                        <Switch>
                            <Route exact path="/" component={PageOne} />
                            <Route path="/two" component={PageTwo} />
                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;