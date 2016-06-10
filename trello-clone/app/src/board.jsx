'use strict';

import React from 'react';
import List from './list';

class Board extends React.Component {

	constructor() {
		super();

		this.lists = [{
        id: 101,
        title: 'To Do',
        cards: [{
          id: 1001,
          content: 'Do you know what it feels like?'
        }]
      },
      {
        id: 102,
        title: 'Doing',
        cards: [{
          id: 1002,
          content: 'Chilling'
        },
        {
          id: 1003,
          content: 'Procrastinating'
        }]
      },
      {
        id: 103,
        title: 'Done',
        cards: [{
          id: 1004,
          content: 'Like a BOSS'
        }]
      }
    ];
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
              <div className="lists clearfix">
                {
                  this.lists.map(list => {
                    return <List key={list.id} title={list.title} cards={list.cards}/>
                  })
                }
              </div>
            </div>
        </section>
      </div>
		);
	}
};

export default Board;
