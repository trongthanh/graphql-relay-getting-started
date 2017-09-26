import React, { Component } from 'react';
import fetchData from '../fetch-data';

class VanillaContainer extends Component {
	static defaultProps = {
		query: `{
			posts {
				id,
				title,
				author {
					firstName,
					lastName,
				},
				votes,
			}
		}`
	}

	state = {
		posts: []
	}

	componentDidMount() {
		fetchData({
			url: 'https://x8vxn499l.lp.gql.zone/graphql',
			query: this.props.query
		}).then((json) => {
			this.setState({
				posts: json.data.posts
			})
		});
	}

	render() {
		const posts = this.state.posts;
		return (
			<div className="container">
				<ul>
				{
					posts.map(post => {
						return <li key={post.id}>{post.title} - by {post.author.lastName} {post.author.firstName}</li>
					})
				}
				</ul>
			</div>
		);
	}
}

export default VanillaContainer;
