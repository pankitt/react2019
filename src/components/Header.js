import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <div className="btn-group pt-3">
                    <Link to="/" className="btn btn-secondary">home</Link>
                    <Link to="/temp" className="btn btn-secondary">temp</Link>
                </div>
            </header>
        )
    }
}

export default Header;