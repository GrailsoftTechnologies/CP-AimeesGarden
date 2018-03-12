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
            <Link to="/"><img src={Logo} alt='the grailsoft logo'></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/About">
              About
            </NavItem>
            <NavItem href="/Projects">
              Projects
            </NavItem>
            <NavItem href="/Products">
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
  className: "Bar-box",
}

// TopBar.propTypes = {
//   className: React.PropTypes.string
// }

export default TopBar;
