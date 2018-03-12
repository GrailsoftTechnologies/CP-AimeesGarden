import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Profile from '../Profile';
import aimeePic from '../../img/aimee.jpg';
import './styles.css';

class About extends Component {

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {
    return (
      <Grid className="About">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Profile name="Aimee Loomis" title="Owner Operator" pic={aimeePic} link="https://www.linkedin.com/in/aimee-loomis-ab989015a/" />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default About;
