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
						<hr/>
						<p><h3><b>Chhoden Gurung</b></h3></p>
						<p><h4>Student</h4></p>
						<p><b>University of Washington Bothell</b></p>
						<p>Email: myemail@hotmail.com</p>
						<p>Phone: 206-0000-000</p>
					</div>
				</div>
			</div>
		);
	}
}

export { ProfilePage };