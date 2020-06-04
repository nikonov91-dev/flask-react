import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark" id="mainNav">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                {this.props.isAuthenticated ? <Link to='/user'>My account</Link> : <Link to='/login'>Login</Link>}
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}