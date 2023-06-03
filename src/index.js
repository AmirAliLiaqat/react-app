import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Amir Ali';
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Hello, My name is {name}</h1>
    <p>Todays Date is {currDate}</p>
    <p>Current Time is {currTime}</p>
  </>,
  document.getElementById('root')
);