import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 'home',
    }
  }

  showhome(){
    this.setState({progress:"home"})
  }

  showAbout(){
    this.setState({progress:"about"})
  }

  PickView(props){
    let progress = this.state.progress;

    if (progress === 'home'){
      return <Home scrollToOffRebs={this.scrollToOffRebs.bind(this)} scrollToDefRebs={this.scrollToDefRebs.bind(this)} scrollToAssists={this.scrollToAssists.bind(this)} scrollToSteals={this.scrollToSteals.bind(this)} scrollToBlocks={this.scrollToBlocks.bind(this)} scrollToTurnovers={this.scrollToTurnovers.bind(this)} scrollToTop={this.scrollToTop.bind(this)}/>
    }
  }

  //scroll methods moved from home.js
  scrollToOffRebs() {
    let element = document.querySelector('.off-rebounds');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToDefRebs() {
    let element = document.querySelector('.def-rebounds');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToAssists() {
    let element = document.querySelector('.assists');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToSteals() {
    let element = document.querySelector('.steals');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToBlocks() {
    let element = document.querySelector('.blocks');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToTurnovers() {
    let element = document.querySelector('.turnovers');
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offset = 120;
    let offsetPosition = elementPosition - offset;

    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  };

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="wrapper">
          <Header showhome={this.showhome.bind(this)} showAbout={this.showAbout.bind(this)}/>

          {this.PickView()} 

          <Footer/>
      </div>
    )
  }
}

export default App;
