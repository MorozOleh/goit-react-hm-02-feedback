import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ good = 0, neutral = 0, bad = 0, total, positivePercentage }) => {
  
  return (
    <>
      <div className="Statistics">

        {total() !== 0
          ? <>
              <p className="Statistics__text">good: {good}</p>
              <p className="Statistics__text">neutral: {neutral}</p>
              <p className="Statistics__text">bad: {bad}</p>
              <p className="Statistics__text">Total:{ total() }</p>
              <p className="Statistics__text">Positive feedback:{positivePercentage()}%</p>
            </>
          : <p className="Statistics__text">No feedback given</p> }
        
      </div>
    </>
  )
}

  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
  }

export default Statistics;

