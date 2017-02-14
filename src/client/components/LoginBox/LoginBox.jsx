import React from 'react'
import Box from 'grommet/components/Box'

export default class LoginBox extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Box
				direction="column"
				justify='center'
				align='center'
				wrap={true}
				margin="none"
				pad='medium'>
				YESSS!!
			</Box>
		)
	}
}