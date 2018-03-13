import React, { Component } from 'react';
import './styles.css';

import { Grid, Row, Col } from 'react-bootstrap';


class Home extends Component {
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    return (
      <section className="main">
    <Grid className="content dark style1 featured services">
      <Row className="row">
        <Col xs={12} md={4}>
          <section>
            <span className="feature-icon"><span className="icon fa fa-heart"></span></span>
            <header>
              <h3>Products and Services</h3>
            </header>
            <p>Things you do for people content goes here</p>
          </section>
        </Col>
        <Col xs={12} md={4}>
          <section>
            <span className="feature-icon"><span className="icon fa fa-leaf"></span></span>
            <header>
              <h3>Our Garden</h3>
            </header>
            <p>All the stuff you do in the garden goes here with food things for sale</p>
          </section>
        </Col>
        <Col xs={12} md={4}>
          <section>
            <span className="feature-icon"><span className="icon fa fa-book"></span></span>
            <header>
              <h3>Resources</h3>
            </header>
            <p>All the neat things your farm has as resources or resources out in the public people can use</p>
          </section>
        </Col>
      </Row>
    </Grid>
  </section>
    );
  }
}

export default Home;
