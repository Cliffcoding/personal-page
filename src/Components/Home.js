import React, { Component } from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
        </div>
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default Home;
