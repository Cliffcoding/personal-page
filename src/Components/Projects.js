import React, { Component } from 'react';
import pictureOne from '../images/macro-man-thumbnail.jpg'
import pictureTwo from '../images/jello-thumbnail.jpg'

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="projects-header">Projects!</h1>
        <article className="projects-section">
        <div className="container">
          <section className="project project-image-left projects-container">
              <img className="project-image project-image-one" src={pictureOne} alt="macro-man-thumbnail" />
              <div className="project-description-one">
                <h2>MacroMan</h2>
                <p>A calorie tracker that allows users to enter their macronutrients and track the amount of calories they can consume.</p>
                <small>Technologies used: jQuery, JavaScript, Firebase, Materialize, Git, GitHub, HTML5, CSS3</small>
              </div>

            </section>
          </div>
          <div className="container">
            <section className="project-image-right projects-container project">
            <div className="project-description-two">
              <h2>Jello</h2>
              <p>Jello is an tracker board that allows a user or team to implement an agile workflow into their project.</p>
              <small>PostgreSQL, Knex.js, Express, JWT, Firebase, Git, Github, node.js, jQuery, JavaScript, HTML5, CSS3</small>
            </div>
              <img className="project-image project-image-two" src={pictureTwo} alt="jello-thumbnail"/>
            </section>
          </div>
        </article>
      </div>
    );
  }
}

export default Projects;
