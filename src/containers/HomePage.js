import React, { Component } from 'react';
import { Weather } from '../components/Weather';
import './HomePage.css';

class HomePage extends Component {
	constructor(props) {
		super(props);
		const urlParams = new URLSearchParams(window.location.search); //Access and store current page url
		let token = urlParams.get('accessToken');
		
		if (token) {
			//Storing the accessToken of current session
			sessionStorage.setItem('token', token);
		} else {
			//Accessing the accessToken of previous session
			token = sessionStorage.getItem('token')
		}
		
		this.state = {
			source: new EventSource(`https://developer-api.nest.com?auth=${token}`),
			camera: null,
		}
	}
	
	storeHistory(data) {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(data)
		}
		
		//Api call to store eventsHistory in backend/API
		fetch('http://localhost:8000/api/history', options)
	}
	
	componentDidMount() {
		const source = this.state.source;
		source.addEventListener('put', event => {
			const data = JSON.parse(event.data);
			this.setState({ 
				camera: data.data.devices.cameras['HSEguGVqtRHFIqe4Lq8yqpZj9BGL-0h4VLspFJqq0durdEXsS70pVg']
			});
			this.storeHistory(this.state.camera.last_event);
		});
	}
	
	render() {
		let camera = this.state.camera; 
		if(camera){
			const hours = new Date().getHours()
			const isDayTime = hours > 6 && hours < 20;
			const bgClassName = isDayTime? 'day': 'night';

			return(
				<div className={`home ${bgClassName}`} >
				<Weather/>
				<div className='image-container'> 
				<h4><b>{camera.name}</b></h4>
				<img className='image-frame' src={camera.last_event.animated_image_url} alt='Frontdoor cam'/>
				</div>
				</div>
				);
		} else {
			return (<Weather/>);
		}
	}

}

export { HomePage };
