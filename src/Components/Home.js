import React, { Component } from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="nav-section">
            <a className="links" href="">About me!</a>
            <a className="links" href="">Projects</a>
          </div>
        </div>
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default Home;
