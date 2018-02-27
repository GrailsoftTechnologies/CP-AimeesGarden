import React, { Component } from 'react';
import './styles.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

class Home extends Component {
  render() {
    return (
      <section className="main">
    <header>
      <div>
      </div>
    </header>
      <Grid className="content dark style1 featured services">
        <div className="container">
          <Row className="row">
            <Col xs={12} md={4}>
              <section>
                <span className="feature-icon"><span className="icon fa fa-cutlery"></span></span>
                <header>
                  <h3>Urban Farm</h3>
                </header>
                <p>Some Garden Content here</p>
              </section>
            </Col>
            <Col xs={12} md={4}>
              <section>
                <span className="feature-icon"><span className="icon fa fa-empire"></span></span>
                <header>
                  <h3>Chickens</h3>
                </header>
                <p>Look at all these chickens</p>
              </section>
            </Col>
            <Col xs={12} md={4}>
              <section>
                <span className="feature-icon"><span className="icon fa fa-shopping-basket"></span></span>
                <header>
                  <h3>Produce</h3>
                </header>
                <p>Buy our beans</p>
              </section>
            </Col>
          </Row>
        </div>
      </Grid>
    </section>
    );
  }
}

export default Home;
