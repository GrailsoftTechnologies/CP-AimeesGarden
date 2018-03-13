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
            <Col md={12}>
              <Project
                title="Aimees Garden"
                details="Urban Farm located in Portland Oregon providing quality produce"
                styles={{
                  backgroundImage: 'url(' + RaisedBedPic + ')',
                  backgroundSize: '40%',
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
