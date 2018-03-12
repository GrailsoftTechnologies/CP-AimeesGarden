import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

class Project extends Component {
  render() {
    return (
      <div className="Project" style={this.props.styles}>
        <div className="TextBlock">
          <h1>{this.props.title}</h1>
          <h2>{this.props.details}</h2>
          <Button bsSize="large" bsStyle="success"><a href={this.props.link} target="_blank">Explore</a></Button>
        </div>
      </div>
    );
  }
}

Project.defaultProps = {
  styles : {backgroundColor: 'green'},
  title : "Default Title",
  details : "Default Details",
  link : "http://www.google.com",
}

export default Project;
