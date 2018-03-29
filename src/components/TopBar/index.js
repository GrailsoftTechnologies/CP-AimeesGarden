import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './styles.css';
import Logo from '../../img/aimeesLogo.png';

class TopBar extends Component {
  render() {
    return (
      <Navbar inverse fluid className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="testBrand">Aimee's Garden</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/About">
              About
            </NavItem>
            <NavItem href="/Seeds">
              Seeds
            </NavItem>
            <NavItem href="/Projects">
              Projects
            </NavItem>
            <NavItem href="/Products_and_services">
              Products & Services
            </NavItem>
            <NavItem href="/Contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

TopBar.defaultProps = {
  className: "Top-bar",
}

// TopBar.propTypes = {
//   className: React.PropTypes.string
// }

export default TopBar;
