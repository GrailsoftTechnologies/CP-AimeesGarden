import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Project from '../Project';

import GardenPic from '../../img/aimeesLogo.png';
import FruitPic from '../../img/ashim-d-silva-65719-unsplash.jpg';
import ProductivityPic from '../../img/andreas-klassen-401337-unsplash.jpg';
import BlockStackPic from '../../img/blockstack.png';
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
                  backgroundImage: 'url(' + GardenPic + ')',
                  backgroundSize: '40%',
                }}
                link="https://github.com/GrailsoftTechnologies/CP-AimeesGarden" />
            </Col>
            <Col md={12}>
              <Project
                title="React Native Guide"
                details="A basic app that uses essential features like google maps and employs useful libraries like redux and sagas"
                styles={{
                  backgroundImage: 'url(' + ProductivityPic + ')',
                }}
                link="https://github.com/dcuthell/newguide" />
            </Col>
            <Col md={12}>
              <Project
                title="FruitFinder"
                details="This app utilizes both local government and community driven data to allow users to find and share locations for fruit and nut producing trees around Portland"
                styles={{
                  backgroundImage: 'url(' + FruitPic + ')',
                }}
                link="https://github.com/dcuthell/FruitFinder-react-native" />
            </Col>
            <Col md={12}>
              <Project
                title="Untitled BlockStack Project"
                details="We're currently working on applying the power of BlockStack to improve conventional transactional systems"
                styles={{
                  backgroundImage: 'url(' + BlockStackPic + ')',
                }}
                link="https://blockstack.org/about" />
            </Col>
          </Row>
        </Grid>



      </div>
    );
  }
}

export default Work;
