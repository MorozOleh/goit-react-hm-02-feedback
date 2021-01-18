import React from "react";
import PropTypes from "prop-types";

const Section = ({ title = "Hello", children }) => {
  return (
  <>
    
    <h2 className="title">{title}</h2>
    {children}

    </>
    
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}



export default Section;