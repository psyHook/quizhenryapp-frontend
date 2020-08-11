import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import iconoHenry from '../assets/img/henry.webp';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Quiz App</title>
    </Helmet>
    <div id="home">
      <section>
        <div style={{ textAlign: "center", marginTop: '250px' }}>
        <img src={iconoHenry}></img>
        </div>
        <h1>HenryQuiz</h1>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/play/instructions">
                Comenzar..
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="auth-container">
          <Link to="/login" className="auth-buttons" id="login-button">
            Login
          </Link>
          <Link to="/register" className="auth-buttons" id="signup-button">
            Sign up
          </Link>
        </div> */}
      </section>
    </div>
  </Fragment>
);

export default Home;
