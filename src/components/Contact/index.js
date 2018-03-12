import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <div className="Contact">
        <h1>Looking to take your garden to the next level?</h1>
        <h2>Get in touch with us today!</h2>
        <h3><a href="mailto:info@aimeesgarden.org">info@aimeesgarden.org</a></h3>
      </div>
    );
  }
}

export default Contact;
