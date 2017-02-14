import React from 'react'

export class Button extends React.Component {
	render() {
		return (
			<a href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>
		)
	}
}