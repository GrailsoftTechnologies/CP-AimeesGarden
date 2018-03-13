import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Profile from '../Profile';
import raisedBedPic from '../../img/raisedBed.jpg';
import './styles.css';

class Products extends Component {

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {
    return (
      <Grid className="Products">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Profile name="Custom Raised Beds" title="Built to Order" pic={raisedBedPic} link="https://www.linkedin.com/in/aimee-loomis-ab989015a/" />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default Products;
