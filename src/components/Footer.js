import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<footer>
				<span>© 2018 Live Watch. All Rights Reserved.</span>
				<br />
				<span>Site Developed by</span>
				<a href="mailto:chhoden.grg@gmail.com">
					<b> Chhoden Gurung</b>
				</a>
			</footer>
		);
	}
}

export { Footer };