import React, {Component} from 'react';
import './CameraHistoryPage.css';

class CameraHistoryPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: null,
		}
	}
	
	componentDidMount(){
		//API call to get events history from backend/API 
		fetch('http://localhost:8000/api/history')
			.then(res => res.json())
			.then(result => {
				this.setState({data: result});
				console.log(result);
			});
	}

	render() {
		let events = this.state.data
		if(events){
			const listItems = events.map((event) => {
				return <li key={event.start_time.substring(21,24)}>
					<div className='event-container'>
						<h5><strong>Event Date: </strong> {event.start_time.substring(0,10)} <strong> Event Time: </strong> {event.start_time.substring(11,19)}</h5>
						<img className='display-frame' src={event.animated_image_url}/>
					</div>
				</li>
			});

			return(
				<div>
					<ul>{listItems}</ul>
				</div>
			);
		}else{
			return null;
		}
	}

}
export {CameraHistoryPage};

