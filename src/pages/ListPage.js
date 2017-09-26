import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';

class ListPage extends React.Component {
	static propTypes = {
		viewer: PropTypes.object,
	}

	render() {
		return (
			<div>
				Song list
			</div>
		);
	}
}


export default class ListPageViewer extends React.Component {

	static query = graphql`
		query ListPageQuery {
			posts {
				id,
				title,
				author {
					firstName,
					lastName,
				},
				votes,
			}
		}
	`;

	render() {
		return (<div>Hello world</div>
			// <QueryViewer
			// 	variables={{}}
			// 	query={ListPageViewer.query}
			// 	component={ListPage}
			// >
			// 	<div className={classes.root}>
			// 		<div className={classes.middle}>Go grabbing some pokemons...</div>
			// 	</div>
			// </QueryViewer>
		);
	}
}

