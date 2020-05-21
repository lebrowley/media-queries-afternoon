import React, { Component } from 'react';
import './App.css';
import Image from './mobileMenu.png';

class App extends Component{
  constructor(){
    super();

    this.state = {
      isMobileMenuOpen: false
    }
  }

  toggleMobileMenu = () => {
    this.setState({isMobileMenuOpen: !this.state.MobileMenuOpen})
  }

  render(){
    return (
      <div className="App">
        <header className="header">
          <div className="home-icon">
            <img
            className="home-icon-img"
            alt="home-icon"
            src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            height= "100"
            width= "200"
            />
          </div>
  
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">services</li>
              <li className="nav-list-item">portfolio</li>
              <li className="nav-list-item">about</li>
              <li className="nav-list-item">team</li>
              <li className="nav-list-item">contact</li>
            </ul>
          </nav>
  
          <nav className="mobile-nav">
            <img
              className="menu-hamburger"
              src={Image}
              alt="mobile-nav"
              onClick={this.toggleMobileMenu}
            />
            <ul className={`mobile-nav-list ${this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null}`}>
              <li className="mobile-nav-list-item">services</li>
              <li className="mobile-nav-list-item">portfolio</li>
              <li className="mobile-nav-list-item">about</li>
              <li className="mobile-nav-list-item">team</li>
              <li className="mobile-nav-list-item">contact</li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <h1 className="box">Welcome To Our Studio!</h1>
          <p className="box">It's Nice To Meet You</p>
          <div className="box text-box">Tell Me More</div>
        </div>
      </div>
    );
  }
}

  

export default App;

 

// https://blackrockdigital.github.io/startbootstrap-agency/assets/img/header-bg.jpg     landing pad image link

// https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg    landing pad icon-left