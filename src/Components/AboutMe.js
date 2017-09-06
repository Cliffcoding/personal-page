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
          </section>
        </div>
      </article>
    );
  }
}

export default AboutMe;
