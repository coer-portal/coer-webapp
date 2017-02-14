import React from 'react'
import {Link} from 'react-router'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

export default class HomeButtonBox extends React.Component {
	render() {
		return (
			<Box
				direction="column"
				justify='center'
				align='center'
				wrap={true}
				margin="none"
				pad='medium'>
				<Link to="/login/student">
					<Box pad="small">
						<Button
							label="I'm a Student"
							onClick={() => {
								console.log("Redirecting to Student Login")
							}}
							primary={true}
							plain={false}
							accent={false}
						/>
					</Box>
				</Link>
				<Link to="/login/warden">
					<Box pad="small">
						<Button
							label="I'm a Warden"
							onClick={() => {
								console.log("Redirecting to Warden Login")
							}}
							primary={true}
							plain={false}
							accent={false}
						/>
					</Box>
				</Link>
			</Box>
		)
	}
}