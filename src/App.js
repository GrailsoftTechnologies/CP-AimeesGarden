import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/index.js';
import Router from './components/Router/index.js';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {scrollFlag: false, oldScrollY: 0};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    if(window.scrollY > 84){
      if(window.scrollY > this.state.oldScrollY){
        this.setState({oldScrollY: window.scrollY});
        if(!this.state.scrollFlag){
          this.setState({scrollFlag: true});
        }
      } else if(window.scrollY < this.state.oldScrollY){
        this.setState({oldScrollY: window.scrollY});
        if(this.state.scrollFlag){
          this.setState({scrollFlag: false});
        }
      } else{
      }
    } else if(window.scrollY <= 84){
      if(this.state.scrollFlag){
        this.setState({scrollFlag: false});
      }
    }
  }
  render() {
    let someClass = "Top-bar";
    if(this.state.scrollFlag){
      someClass = "Top-bar-hidden";
    };
    return (
      <div className="App">
        <TopBar className={someClass}/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
