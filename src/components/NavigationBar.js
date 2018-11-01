import React, { Component } from 'react';
import { Nav, Navbar,NavItem } from 'react-bootstrap';

class NavigationBar extends Component{
	render(){
		return(
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/home">Live Watch</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="/home">
							Home
						</NavItem>
						<NavItem eventKey={2} href="/profile">
							Profile
						</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="/history">
							Camera History
						</NavItem>
						<NavItem eventKey={2} href="/login">
							Log Off
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export {NavigationBar};