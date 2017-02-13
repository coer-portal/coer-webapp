// Import Grommet Styles
import 'grommet/scss/vanilla/index.scss';

import React from 'react'
import App from 'grommet/components/App'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Menu from 'grommet/components/Menu'
import './HomePageLayout.sass'

export class HomePageLayout extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<App className="HomePageLayout">
				<Box
					justify='center'
					align='center'
					wrap={true}
					margin="none"
					pad='medium'>
					<Heading className="HomeHeading">COER Portal</Heading>
				</Box>
				<Box
					justify='center'
					align='center'
					wrap={true}
					margin="none"
					pad='medium'
					className="HomeButtonBox">
					{this.props.children}
				</Box>
				<Footer justify='between' size="large">
					<Box direction="row" align="center" pad={{between: "medium"}}>

					</Box>
				</Footer>
			</App>
		);
	}
}