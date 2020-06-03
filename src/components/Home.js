import React from "react";
import "../scss/home.scss";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <section className="home-portfolio">
      <div className="profile-caontainer">
        <div className="picture-profile">
          <img
            src="img/picture-profile-portfolio.jpg"
            alt="Pierre-Alain Agnan"
          />
        </div>
      </div>

      <article className="intro-portfolio">
        <h1>
          Hello, <br /> je suis Pierre-Alain Agnan <br /> Développeur web &
          mobile
        </h1>

        <p>Front-end /back-end/javascript</p>
      </article>

      <div className="contact-button">
        <button>CONTACT</button>
      </div>
    </section>
  );
};

export default withRouter(Home);
