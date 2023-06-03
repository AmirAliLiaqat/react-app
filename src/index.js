import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Amir Ali';
const img1 = 'https://picsum.photos/300/300';
const img2 = 'https://picsum.photos/310/300';
const img3 = 'https://picsum.photos/320/300';
const links = 'http://byte.likesyou.org';

ReactDOM.render(
  <>
    <h1 className='heading'>Hello, My name is {name}</h1>
    <div className='img_div'>
      <img src={img1} alt='randomImages'/>
      <img src={img2} alt='randomImages'/>
      <a href={links} target='_blank'>
        <img src={img3} alt='randomImages'/>
      </a>
    </div>
  </>,
  document.getElementById('root')
);