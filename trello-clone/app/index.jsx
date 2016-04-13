import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './src/board.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(new Board(), document.getElementById('app'));
});
