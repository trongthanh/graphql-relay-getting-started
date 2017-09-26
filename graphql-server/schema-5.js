/**
 * Step 5: Relational data and nested Object
 *
 * This example demonstrates a simple server with some
 * relational data: Posts and Authors. You can get the
 * posts for a particular author, and vice-versa
 *
 * Sub-step #1: Async resolver
 */
// Read the complete docs for graphql-tools here:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
import { find, filter } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
	type Author {
		id: Int!
		firstName: String
		lastName: String
		posts: [Post] # the list of Posts by this author
	}

	type Post {
		id: Int!
		title: String
		author: Author
		votes: Int
	}

	# the schema allows the following query:
	type Query {
		posts(limit: Int): [Post]
		author(id: Int!): Author
	}
`;

const resolvers = {
	Query: {
		posts(root, { limit }) {
			if (limit != null) {
				return posts.slice(0, limit);
			} else {
				return posts;
			}
		},

		author(root, { id }) {
			return find(authors, { id: id });
		},
	},

	Author: {
		posts(author) {
			//*
			return filter(posts, { authorId: author.id });
			/*/
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(filter(posts, { authorId: author.id }));
				}, 1000);
			});
			//*/
		}
	},

	Post: {
		author(post) {
			return find(authors, { id: post.authorId });
		}
	},
};

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const authors = [
	{ id: 1, firstName: 'Nhân', lastName: 'Trúc' },
	{ id: 2, firstName: 'Phương', lastName: 'Bích' },
	{ id: 3, firstName: 'Hiếu', lastName: 'Lê' },
];

const posts = [
	{ id: 1, authorId: 1, title: 'Ngồi Hát Đỡ Buồn', votes: 2 },
	{ id: 2, authorId: 1, title: 'Thật Bất Ngờ', votes: 3 },
	{ id: 3, authorId: 2, title: 'Đưa Em Đi Khắp Thế Gian', votes: 1 },
	{ id: 4, authorId: 3, title: 'Ngày Mai Em Đi', votes: 7 },
];
