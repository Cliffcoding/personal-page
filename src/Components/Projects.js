import React, { Component } from 'react';
import pictureOne from '../images/macro-man-thumbnail.jpg'
import pictureTwo from '../images/jello-thumbnail.jpg'

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="projects-header">Projects!</h1>
        <div className="projects">
          <div className="grid-layout">
            <div className="view">
              <img className="hexagon-image" src={pictureOne} alt="macro-man-thumbnail" />
                <div className="mask"></div>
                <div className="content">
                  <h2>MacroMan</h2>
                  <p className="description">A calorie tracker that allows users to enter their macronutrients and track the amount of calories they can consume.</p>
                  <p>Built with</p>
                  <p>jQuery, JavaScript, Firebase, Materialize, Git, GitHub, HTML5, CSS3</p>
                </div>
            </div>
            <div className="view resume-color"></div>
            <div className="view resume-color">
            <img className="hexagon-image" src={pictureTwo} alt="jello-thumbnail"/>
              <div className="mask"></div>
              <div className="content">
                <h2>Jello</h2>
                <p className="description">Jello is an tracker board that allows a user or team to implement an agile workflow into their project.</p>
                <p>Built with</p>
                <p className="description">PostgreSQL, Knex.js, Express, JWT, Firebase, Git, Github, node.js, jQuery, JavaScript, HTML5, CSS3</p>
              </div>
            </div>
            <div className="view"></div>
            <div className="view resume-color"></div>
            <div className="view"></div>
            <div className="view"></div>
            <div className="view resume-color"></div>
            <div className="view"></div>
            <div className="view">
              <img className="hexagon-image" src={pictureTwo} alt="jello-thumbnail"/>
                <div className="mask"></div>
                <div className="content">
                  <h2>Jello</h2>
                  <p className="description">Jello is an tracker board that allows a user or team to implement an agile workflow into their project.</p>
                  <p>Built with</p>
                  <p className="description">PostgreSQL, Knex.js, Express, JWT, Firebase, Git, Github, node.js, jQuery, JavaScript, HTML5, CSS3</p>
                </div>
            </div>
            <div className="view resume-color"></div>
            <div className="view">
            <img className="hexagon-image" src={pictureTwo} alt="jello-thumbnail"/>
              <div className="mask"></div>
              <div className="content">
                <h2>Jello</h2>
                <p className="description">Jello is an tracker board that allows a user or team to implement an agile workflow into their project.</p>
                <p>Built with</p>
                <p className="description">PostgreSQL, Knex.js, Express, JWT, Firebase, Git, Github, node.js, jQuery, JavaScript, HTML5, CSS3</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Projects;
