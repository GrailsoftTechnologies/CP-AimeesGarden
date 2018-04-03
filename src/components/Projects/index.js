import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Project from '../Project';

import RaisedBedPic from '../../img/raisedBed.jpg';
import './styles.css';

class Work extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <div className="Projects">
        <Grid className="About">
          <Row>
            <Col md={3}>
              <Project
                title="Happy Valley Project"
                details="Two Adult Family Edible Garden"
                styles={{
                  backgroundImage: 'url(' + RaisedBedPic + ')',
                  backgroundSize: '100%',
                }}
                link="https://github.com/GrailsoftTechnologies/CP-AimeesGarden" />
            </Col>
            <Col md={3}>
              <Project
                title="Happy Valley Project 2"
                details="Two Adult Two Children Family Edible Garden"
                styles={{
                  backgroundImage: 'url(' + RaisedBedPic + ')',
                  backgroundSize: '100%',
                }}
                link="https://github.com/GrailsoftTechnologies/CP-AimeesGarden" />
            </Col>
            <Col md={3}>
              <Project
                title="Happy Valley Project 2"
                details="Two Adult Two Children Family Edible Garden"
                styles={{
                  backgroundImage: 'url(' + RaisedBedPic + ')',
                  backgroundSize: '100%',
                }}
                link="https://github.com/GrailsoftTechnologies/CP-AimeesGarden" />
            </Col>
            <Col md={3}>
              <Project
                title="Happy Valley Project 2"
                details="Two Adult Two Children Family Edible Garden"
                styles={{
                  backgroundImage: 'url(' + RaisedBedPic + ')',
                  backgroundSize: '100%',
                }}
                link="https://github.com/GrailsoftTechnologies/CP-AimeesGarden" />
            </Col>
          </Row>
        </Grid>



      </div>
    );
  }
}

export default Work;
