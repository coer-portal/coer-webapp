import React from 'react'
import Box from 'grommet/components/Box'

export class Header extends React.Component {
	render() {
		return (
			<Box
				align='center'
				justify='center'
				direction='row'
				wrap={true}
				pad="medium"
				margin="small"
			>{this.props.HeaderName}</Box>
		)
	}
}

Header.propTypes = {
	HeaderName: React.PropTypes.string.isRequired
};