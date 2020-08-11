import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import answer from "../../assets/img/answer.png";
import fiftyFifty from "../../assets/img/fiftyFifty.PNG";
import hints from "../../assets/img/hints.PNG";
import options from "../../assets/img/options.PNG";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>HenryQuiz</title>
    </Helmet>
    <div className="instructions container">
      <h1>Cómo responder este Quiz</h1>
      <p>Asegúrese de leer esta guía de principio a fin.</p>
      <ul className="browser-default" id="main-list">
        <li>
          El juego tiene una duración de 15 minutos y finaliza tan pronto como
          transcurra su tiempo
        </li>
        <li>Cada juego consta de 10 preguntas.</li>
        <li>
          Cada pregunta contiene 4 opciones.
          <img src={options} alt="Quiz App options example" />
        </li>
        <li>
          Seleccione la opción haciendo click en la respuesta que usted cree
          correcta.
          <img src={answer} alt="Quiz App answer example" />
        </li>
        <li>
          Cada juego tiene 2 tipos de ayuda:
          <ul id="sublist">
            <li>2 Comodines de 50-50 de posibilidades.</li>
            <li>5 Pistas de ayuda.</li>
          </ul>
        </li>
        <li>
          Seleccione el comodin de 50-50 haciendo clic en el icono{" "}
          <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>{" "}
          eliminará 2 respuestas incorrectas, dejando la respuesta correcta y
          una incorrecta.
          <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example" />
        </li>
        <li>
          Use una pista haciendo clic en el ícono
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
          eliminará una respuesta incorrecta dejando dos respuestas incorrectas
          y una respuesta correcta. Puede usar tantas sugerencias como sea
          posible en una sola pregunta.
          <img src={hints} alt="Quiz App hints example" />
        </li>
        <li>
          Siéntase libre de abandonar (o retirarse) del juego en cualquier
          momento. En ese caso Su puntaje será revelado después.
        </li>
        <li>El temporizador comienza tan pronto como se carga el juego.</li>
        <li>Hagamos esto si crees que tienes lo que se necesita.</li>
      </ul>
      <div>
        <span className="left">
          <Link to="/" className="btn red darken-4">No, llévame de vuelta al Inicio</Link>
        </span>
        <span className="right">
          <Link to="/play/quiz" className="btn yellow accent-4 but">Ok, hagamos esto!</Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizInstructions;
