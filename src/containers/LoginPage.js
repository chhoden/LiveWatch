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
				</Form>
			</div>
		);
	}
}

export { LoginPage };
