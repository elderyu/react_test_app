import React from 'react';

const ButtonDisplay = (props: { number: number }) => {
  return <button className="number">{props.number}</button>;
};

export default ButtonDisplay;
