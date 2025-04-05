import React from "react";
import logo from './assets/images/logo.png';
import character from './assets/images/pose-1-calm.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="Apricot Labs Logo"
        className="logo"
        style={{ position: 'absolute', top: '20px', left: '20px', width: '150px', zIndex: '10' }}
      />
      <div className="content-wrapper">
        <div className="bubble-container">
          <div className="speech-bubble">
            <p>
              <strong>ברוכים הבאים לאיזור שלי,</strong><br />
              אני <strong>April Cot</strong> – ואני יודעת לנחש כל דמות,<br />
              רוצים לנסות אותי?
            </p>
          </div>
          <button className="cta-btn">LET'S GO!!!!!!!</button>
        </div>
        <img src={character} alt="Character" className="character" />
      </div>
    </div>
  );
}

export default App;