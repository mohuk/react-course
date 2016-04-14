import React from 'react';
import ReactDOM from 'react-dom';
import Board from './src/board.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(React.createElement(Board), document.getElementById('app'));
});
