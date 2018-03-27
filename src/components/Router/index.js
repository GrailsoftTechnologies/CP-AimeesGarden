import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';
import Products from '../Products';
import SeedOutput from '../SeedOutput';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/products_and_services" component={Products}/>
        <Route path="/seeds" component={SeedOutput}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default Router;
