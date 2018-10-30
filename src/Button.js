import React, { Component } from 'react';
import './App.css';

class Button extends Component {
	constructor(props){
		super(props);

		// this.onClick = this.onClick.bind(this);
	}

	// onClick(){
	// 	alert("You just clicked "+ this.props.title);
	// }

	render() {
		return (
			<button onClick={this.props.onClick}>{this.props.title}</button>
		);
	}
}

export { Button };