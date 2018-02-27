import React, { Component } from 'react';
import './App.css';
import Router from './components/Router/index.js';

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
        console.log("scrolling down");
        this.setState({oldScrollY: window.scrollY});
        if(!this.state.scrollFlag){
          this.setState({scrollFlag: true});
        }
      } else if(window.scrollY < this.state.oldScrollY){
        console.log("scrolling up");
        this.setState({oldScrollY: window.scrollY});
        if(this.state.scrollFlag){
          this.setState({scrollFlag: false});
        }
      } else{
        console.log("no scrollY");
      }
    } else if(window.scrollY <= 84){
      if(this.state.scrollFlag){
        console.log("scroll down done");
        this.setState({scrollFlag: false});
      }
    }
    console.log(window.scrollY);
    // console.log(this.state);
  }
  render() {
    // let someClass = "Bar-box";
    // if(this.state.scrollFlag){
    //   someClass = "Bar-box-hidden";
    // };
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
