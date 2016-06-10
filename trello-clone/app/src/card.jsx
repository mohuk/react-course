'use strict';

import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <p className="content">
          {
            this.props.content
          }
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  content: React.PropTypes.string
};

export default Card;
