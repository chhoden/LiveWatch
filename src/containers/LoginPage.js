import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import './LoginPage.css';


class LoginPage extends Component {
	constructor(props) {
		super(props);
		sessionStorage.clear();
	}

	render() {
		return (
			<div className="login">
				<Form horizontal>
					<h1>Welcome to Live Watch</h1>
					<br/>
					<FormGroup controlId="formHorizontalEmail">
						<h4>Please press continue to sign in with Nest</h4>
						<Button bsStyle="primary" href="https://home.nest.com/login/oauth2?client_id=13bd706a-14a9-4718-b8b5-b4d881008010&state=STATE">Continue</Button>					
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export { LoginPage };
