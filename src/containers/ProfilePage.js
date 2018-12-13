import React, { Component } from 'react';
import './ProfilePage.css';
import smilingAnimal from '../images/smilingAnimal.jpg';


class ProfilePage extends Component {
	render() {
		return (
			<div className="profile">
				<div className="userProfile">
					<div className="profilePicture">
						<img src={smilingAnimal} alt="User" height="300" width="300" className="center"></img>
					</div>
					<div className="userInfo">
						<p><h3><b>Chhoden Gurung</b></h3></p>
						<p><b>Email Address:</b> myemail@hotmail.com</p>
						<p><b>Address:</b> 123 New Ave, Bothell, WA</p>
						<p><b>Phone:</b> 206-0000-000</p>
						<p><b>Camera Installed: </b> 1</p>
						<p><b>Camera Location: </b> Front Door</p>
					</div>
				</div>
			</div>
		);
	}
}

export { ProfilePage };