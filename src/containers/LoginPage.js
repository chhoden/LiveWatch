import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import './LoginPage.css';


class LoginPage extends Component {

	render() {
		return (
			<div className="login">
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<h2 >Sign In</h2>
						<br />
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={10}>
							<FormControl type="email" placeholder="Email" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
							Password
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="Password" />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Checkbox>Remember me</Checkbox>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">Sign in</Button>
						</Col>
					</FormGroup>

					<Button bsStyle="primary" href="https://home.nest.com/login/oauth2?client_id=13bd706a-14a9-4718-b8b5-b4d881008010&state=STATE">Login with Nest</Button>
				
				</Form>
			</div>
		);
	}
}

export { LoginPage };
