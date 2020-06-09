import React from "react";
import "../scss/about.scss";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <section className="about-portfolio">
      <div className="about-container">
        <div className="about-content">
          <div className="about-title">
            <h1>À PROPOS DE MOI</h1>
          </div>

          <div className="about-me">
            <p>
              C'est à la suite de l’obtention de mon BTS assistant de gestion en
              2017, que j’ai débuté ma reconversion professionnelle dans le
              domaine du numérique. À la suite de divers stages (responsable web
              marketing) et de formation (chef de projet digital), c’est en
              suivant une formation intensive de développement web au sein de
              l’organisme Simplon que j’ai découvert une nouvelle passion: le
              développement web.
            </p>

            <p>
              Jeune passionné de développement web et du numérique. Personne
              ayant soif de connaissances, minutieux dans son travail. Fan de
              culture pop et d’art créatif, tel que la bande dessinée (comics,
              manga, bd franco-belge,etc....) dont je traite le sujet au sein
              d'un blog personnel,j'apprécie également beaucoup le monde du
              cinéma.
            </p>

            <p>
              Je suis particulièrement intrigué par les différents aspects du
              front-end mais aussi du back-end, je suis à la recherche constante
              de projet me permettant d’en explorer d’avantages sur chacun de
              ces spectres.
            </p>
          </div>
        </div>
        <div className="about-illustration">
          <div className="cover-container">
            <img src="img/about-illustration.png" alt="à propos de moi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Home);
