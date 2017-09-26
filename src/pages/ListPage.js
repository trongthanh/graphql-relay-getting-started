import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'react-relay';

import environment from '../relay-environment';

class ListPage extends React.Component {
	static propTypes = {
		posts: PropTypes.array,
	}

	render() {
		const posts = this.props.posts;

		return (
			<ul>
				{
					posts.map(post => {
						return <li key={post.id}>{post.title} - by {post.author.lastName} {post.author.firstName}</li>
					})
				}
			</ul>
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
		return (
			<QueryRenderer
				environment={environment}
				variables={{}}
				query={ListPageViewer.query}

				render={({ error, props }) => {
					if (error) {
						return <div>{error.message}</div>;
					} else if (props) {
						{/* console.log('props', props); */}
						return <ListPage posts={props.posts} />;
					}
					return <div>Loading</div>;
				}}
			/>
		);
	}
}

