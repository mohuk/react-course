'use strict';

import React from 'react';
import Card from './card';


class List extends React.Component {

  constructor (title, cards = []) {
    super();
    this.title = title;
    this.cards = [];
    cards.forEach(card => {
      this.cards.push(React.createElement(Card.bind(null, card)));
    }, this);
  }

  render () {
    let cards = this.cards;
    let title = this.title;
    return (
      <div className="list">
        <strong>{title}</strong>
        <div>
          { cards }
        </div>
      </div>
    )
  }
}

export default List;
