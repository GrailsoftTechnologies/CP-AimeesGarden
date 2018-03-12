import React, { Component } from 'react';
import defaultPic from '../../img/thorthors.jpg'
import './styles.css';

class ProfilePic extends Component {
  render() {
    return (
      <img className="ProfilePic" src={this.props.pic} alt={this.props.name}/>
    );
  }
}

ProfilePic.defaultProps = {
  name : "Danny Default",
  pic : defaultPic,
}


export default ProfilePic;
