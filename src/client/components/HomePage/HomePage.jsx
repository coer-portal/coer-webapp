import React from 'react'
import {Container, Row, Col} from 'react-grid-system'

import './HomePage.sass'

export default class HomePageLayout extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	static childContextTypes = {
		phone: React.PropTypes.bool,
		tablet: React.PropTypes.bool,
		breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
		containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
		gutterWidth: React.PropTypes.number,
	};

	getChildContext = () => ({
		phone: this.props.phone,
		tablet: this.props.tablet,
		breakpoints: [768, 992, 1200],
		containerWidths: [750, 970, 1170],
		gutterWidth: 0,
	});

	render() {
		return (
			<Container className="HomePage">
				<Row className="HomePageHeaderRow">
					<img src="assets/coer_logo.png" className="CoerLogo" />
				</Row>
				<Container>
					{this.props.children}
				</Container>
			</Container>
		);
	}
}