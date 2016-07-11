import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.css';


export default class Header extends Component {
  onLogoutClick(event) {
    event.preventDefault();
    this.props.handleLogout();
  }

  render() {
    const { user } = this.props;
    // const pathname = this.props.location.pathname;
    // const isLoginPage = pathname.indexOf('login') > -1;
    // const isAboutPage = pathname.indexOf('about') > -1;
    // const isUsersPage = pathname.indexOf('users') > -1;
    // const isReposPage = pathname.indexOf('repos') > -1;

    return (
        <div className="header click_menu transparent">
          <div className="mainbar">
            <div className="container-fluid">
              <div className="logo"><a href="index-2.html" className="brand"><img src="assets/images/anandam-buildings-logo.png" alt="logo" /></a></div>
              <div className="nav_and_tools nav_centered uppercase transparent">
                <nav className="primary_nav">
                  <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Accomodation</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">Conference Hall</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div><a className="menu-toggler"><span className="title" /><span className="lines" /></a>
          </div>
        </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
  location: React.PropTypes.object,
};
