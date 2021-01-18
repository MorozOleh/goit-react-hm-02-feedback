import React from "react";
import "./FeedbackOptions.css";
import PropTypes from "prop-types";


const FeedbackOptions = ({onLeaveFeedback}) => {
  
    return (
      <div className="FeedbackOptions">

        <button
          type="button"
          className="FeedbackOptions__button"
          onClick={() => onLeaveFeedback('good')}
        >
          good
        </button>
        
        <button
          type="button"
          className="FeedbackOptions__button"
          onClick={() => onLeaveFeedback('neutral')}
        >
          neutral
        </button>
        
        <button
          type="button"
          className="FeedbackOptions__button"
          onClick={() => onLeaveFeedback('bad')}
        >
          bad
        </button>

      </div>
    )
  }

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  }

export default FeedbackOptions;