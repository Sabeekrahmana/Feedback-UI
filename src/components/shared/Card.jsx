import React from 'react';
import  PropTypes from 'prop-types';

function Card ({  children, reverse }) {

// const Card = ({ children, reverse }) => {
  
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>

    <div className="card"
     style={{backgroundColor: reverse ? 'rgba(0,0,0,0.8)': 'pink',
     color: reverse ? 'pink' : '#000'}}>{children}</div>
  )
}

Card.defaultProps = {
    reverse : false,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool
}

export default Card;      