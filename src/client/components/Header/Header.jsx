import React from 'react'
import {Row} from 'react-grid-system'

export class Header extends React.Component {
	render() {
		return (
			<Row>
				<h1>{this.props.Title}</h1>
			</Row>
		)
	}
}

Header.propTypes = {
	Title: React.PropTypes.string.isRequired
};