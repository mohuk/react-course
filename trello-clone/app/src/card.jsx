'use strict';
import React from 'react';

class Card extends React.Component {
  constructor(content) {
    super();
    this.content = content;
  }

  render() {
    let title = 'Card';
    let content = this.content;
    return (
      <div className="card">
        <p className="content">
          { content }
        </p>
      </div>
    );
  }
}

export default Card;
