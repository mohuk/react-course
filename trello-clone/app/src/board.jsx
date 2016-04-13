import React from 'react';
import { List } from './list.jsx';

class Board extends React.Component {

	constructor(count) {
		super();
		this.lists = [];
		for(let i = 0; i < count; i++){
			this.lists.push(new List());
		}
	}

	render() {
		return (
			<div className="lists">
				{ this.lists }
			</div>
		);
	}
};
