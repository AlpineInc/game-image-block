import React from "react";
import "./Scorecard.css";

const Scorecard = (props) => (
  <div className="scorecard">
    <h2>Score</h2>
    <h1>{props.score}</h1>
    <h2>Top Score</h2>
    <h1>{props.maxScore}</h1>
  </div>
);

export default Scorecard;

