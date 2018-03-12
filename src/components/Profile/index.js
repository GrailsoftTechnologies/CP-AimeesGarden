import React, { Component } from 'react';
import ProfilePic from '../ProfilePic';
import './styles.css';
import defaultPic from '../../img/thorthors.jpg'

class Project extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="Profile" style={this.props.styles}>
          <ProfilePic pic={this.props.pic} name={this.props.name}/>
          <div className="TextBox">
            <h1>{this.props.name}</h1>
            <h2>{this.props.title}</h2>
          </div>
        </div>
      </a>
    );
  }
}

Project.defaultProps = {
  styles : {backgroundColor: 'white'},
  name : "Danny Default",
  title : "Default Position",
  link : "https://www.compass.com/agents/nyc/thor-thors/",
  pic : defaultPic,
}


export default Project;
