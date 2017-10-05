import React, { Component } from 'react';
import picture from '../images/personal-pic.JPG'
class AboutMe extends Component {
  render() {
    return (
      <article className="about-me">
        <div className="container">
          <section className="vertical-align">
            <img className="img-fit section-fit" src={picture} alt="It's me!" />
            <h1>About me!</h1>
            <h4>Currently residing in Denver. My hobbies include getting out of the city and going on hikes or mountain trips, I love tinkering and building miscellanious things. </h4>
            <div className="links">
              <a href="https://www.linkedin.com/in/cliffcoding/"><i className="link fa fa-linkedin-square fa-2x" aria-hidden="true"> /in/cliffcoding </i></a>
              <a href="https://github.com/Cliffcoding"><i className="link fa fa-github-square fa-2x" aria-hidden="true">/cliffcoding</i></a>
              <a href="https://twitter.com/Jbonus1473"><i className="link fa fa-twitter-square fa-2x" aria-hidden="true">/Jbonus1473</i></a>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default AboutMe;
