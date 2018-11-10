import React, {Component} from 'react';

class CameraHistoryPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: null,
		}
	}
	
	// componentDidMount(){
	// 	fetch().then(res => res.json()).then(result => {
	// 		this.setState({data: });
	// 	});
	// }

	render() {
		return (
			<div>History</div>
		);
	}
}

export {CameraHistoryPage};
