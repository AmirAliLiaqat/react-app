import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'Amir Ali';

ReactDOM.render( 
  <>
    <h1>my name is {fname}</h1>
    <p>my nucky number is {Math.random()}</p>
  </>, 
  document.getElementById("root")
);