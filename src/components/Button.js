import React from 'react'

export const Button = (props) => {
    const {className , handleEvent, title} = props;
  return (
    <button className={className} onClick={handleEvent}>{title}</button>
  );
;}
