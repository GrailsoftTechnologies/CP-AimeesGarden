import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <nav className="nav navbar">
          <div className="logo"><Link to="/"><p>Grailsoft Technical Solutions</p></Link></div>
          <ul className="menu">
            <li className="menu-item"><p><Link to="/Work">Work</Link></p></li>
            <li className="menu-item"><p><Link to="/About">About</Link></p></li>
            <li className="menu-item"><p><Link to="/contact">Contact</Link></p></li>
          </ul>
        </nav>
      </div>
    );
  }
}

TopBar.defaultProps = {
  className: "Bar-box",
}

export default TopBar;
