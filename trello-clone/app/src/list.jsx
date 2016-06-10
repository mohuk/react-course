'use strict';

import React from 'react';
import Card from './card';


class List extends React.Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div className="list">
        <strong>{this.props.title}</strong>
        <div>
        {
          this.props.cards.map(function(card){
            return <Card key={card.id} content={card.content}/>
          })
        }
        </div>
      </div>
    )
  }
}

List.propTypes = {
  title: React.PropTypes.string,
  cards: React.PropTypes.array
};

export default List;
