// import React from 'react';
const React = require('react');

export default () => {
  const firstName = 'Pepe';
  const lastName = 'Mujica';

  return (
    <div>
      <h1>React Scaffold with Webpack & Babel</h1>
      <p>{`My name is ${firstName}, and my last name is ${lastName}`}</p>
    </div>
  );
}