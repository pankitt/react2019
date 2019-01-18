import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container">
                <div className="btn-group py-3">
                    <Link to="/" className="btn btn-secondary">Home</Link>
                    <Link to="/learn1" className="btn btn-secondary">Page 1</Link>
                    <Link to="/learn2" className="btn btn-secondary">Page 2</Link>
                </div>
            </header>
        )
    }
}

export default Header;