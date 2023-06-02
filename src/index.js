import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'Amir';
const lname = 'Ali';

ReactDOM.render( 
  <>
    <h1>my name is {fname} {lname}</h1>
    <h1>my name is {fname + lname}</h1>
    <h1>my name is {fname + " " + lname}</h1>
    <h1>{`my name is ${fname} ${lname}`}</h1>
  </>, 
  document.getElementById("root")
);