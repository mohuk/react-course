'use strict';

import React from 'react';
import List from './list';

class Board extends React.Component {

	constructor() {
		super();
		this.lists = [];
    this.lists.push(React.createElement(List.bind(null, 'To Do')));
    this.lists.push(React.createElement(List.bind(null, 'Doing')));
    this.lists.push(React.createElement(List.bind(null, 'Done')));
	}

	render() {
    let lists = this.lists;
		return (
      <div className="board">
        <header>
          <h3>Trello Clone</h3>
        </header>
        <section className="content">
            <div className="lists-content">
              <strong>Things to get done</strong>
              <div className="lists">
                { lists }
              </div>
            </div>
        </section>
      </div>
		);
	}
};

export default Board;
