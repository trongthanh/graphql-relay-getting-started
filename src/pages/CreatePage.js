import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';

class CreatePage extends React.Component {
	static propTypes = {
		viewer: PropTypes.object,
	}

	render() {
		return (
			<div>
				Create Song
			</div>
		);
	}
}

export default CreatePage
