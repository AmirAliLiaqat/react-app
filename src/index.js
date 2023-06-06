import React from 'react';
import ReactDOM from 'react-dom';
// method 1
import hello, {myques, name, names} from './App';
// method 2
import * as ques from './App';

ReactDOM.render(
  <>
    {/* method 1 */}
    <ol>
      <li>{hello}</li>
      <li>{myques}</li>
      <li>{name()}</li>
      <li>{names()}</li>
    </ol>
    {/* method 2 */}
    <ol>
      <li>{ques.default}</li>
      <li>{ques.myques}</li>
      <li>{ques.name()}</li>
      <li>{ques.names()}</li>
    </ol>
  </>,
  document.getElementById('root')
);