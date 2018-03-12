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
            <span className="feature-icon"><span className="icon fa fa-code"></span></span>
            <header>
              <h3>Website Creation and Hosting</h3>
            </header>
            <p>The team of talented developers at Grailsoft will help mold your vision into a reality. Using the latest, most agile frameworks, the Grailsoft team will oversee the entire project, from prelimanary design through product launch, and beyond.</p>
          </section>
        </Col>
        <Col xs={12} md={4}>
          <section>
            <span className="feature-icon"><span className="icon fa fa-cloud"></span></span>
            <header>
              <h3>Clouds</h3>
            </header>
            <p>If your application is experiencing increased traffic and it’s becoming difficult to scale resources on the fly to meet the increasing demand or you need to reduce operational costs, while increasing the effectiveness of IT processes, then let us review your application for potential migration to the cloud.

Moving to the cloud offers a laundry list of benefits and advantages. But you need a strategy for realizing them. Otherwise you’ll end up in the “cloud-washing” trap we see so many companies fall into, where physical infrastructure is dumped into a virtual environment with no considerations for best practices.</p>
          </section>
        </Col>
        <Col xs={12} md={4}>
          <section>
            <span className="feature-icon"><span className="icon fa fa-mobile"></span></span>
            <header>
              <h3>Mobile Development</h3>
            </header>
            <p>At Grailsoft we believe mobile apps should be functional, user-friendly, and available on both Android and iOS. Using the latest frameworks, the Grailsoft team can take your app idea and turn it into a project that will impress.</p>
          </section>
        </Col>
      </Row>
    </Grid>
  </section>
    );
  }
}

export default Home;
