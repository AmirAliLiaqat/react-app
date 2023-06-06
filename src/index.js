import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub, div, multi} from './App';

ReactDOM.render(
  <>
    <ul>
      <li>Sum of two no is {add(30,5)}</li>
      <li>Sub of two no is {sub(30,5)}</li>
      <li>Div of two no is {div(10,3)}</li>
      <li>Milti of two no is {multi(10,3)}</li>
    </ul>
  </>,
  document.getElementById('root')
);