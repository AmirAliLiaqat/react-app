import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

ReactDOM.render(
  <>
    <Card imgsrc="https://picsum.photos/seed/picsum/200/300" title="Byte Ki Duniya" sname="Let's Do Code" link="http://byte.likesyou.org" />,
    <Card imgsrc="https://picsum.photos/id/237/200/300" title="Mehar Herbals" sname="Heart of perfect health" link="http://meharherbals.likesyou.org" />,
    <Card imgsrc="https://picsum.photos/200/300?grayscale" title="ByteBunch" sname="IT Solutions" link="https://bytebunch.com" />,
    <Card imgsrc="https://picsum.photos/200/300.jpg" title="ByteBunch Blog" sname="Another Wordpress site" link="https://test.bytebunch.com" />,
  </>,
  document.getElementById('root')
);