/**
 * Step 6: Mutation and inputs
 *
 * NOTE #1: Although we can use query to pass stored data,
 * we should use Mutation for clarification
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

	# Note the input type
	input PostInput {
		title: String!
		authorId: Int!
	}

	type Query {
		posts(limit: Int): [Post]
		author(id: Int!): Author
	}

	type Mutation {
		upvotePost (postId: Int!): Post
		newPost (input: PostInput): Post
	}
`;

const resolvers = {
	Query: {
		posts(root, { limit }) {
			if (limit != null) {
				return posts.sort((a, b) => (b.id - a.id)).slice(0, limit); // sort descending by ID
			} else {
				return posts.sort((a, b) => (b.id - a.id)); // sort descending by ID
			}
		},

		author(root, { id }) {
			return find(authors, { id: id });
		},
	},

	Author: {
		posts(author) {
			return filter(posts, { authorId: author.id });
		}
	},

	Post: {
		author(post) {
			return find(authors, { id: post.authorId });
		}
	},

	Mutation: {
		upvotePost(root, { postId }) {
			const post = find(posts, { id: postId });
			if (!post) {
				throw new Error(`Couldn't find post with id ${postId}`);
			}
			post.votes += 1;
			return post;
		},

		newPost(root, { input }) {
			const id = posts.length + 1;
			posts.push({
				id,
				title: input.title,
				authorId: input.authorId,
				votes: 0,
			});

			return find(posts, { id });
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


/*
Query to try in GraphiQL:
#1. Without variables
```
mutation {
	newPost(input: {
		authorId: 2,
		title: "Gửi Anh Xa Nhớ"
	}) {
		id,
		title,
		author {
			firstName
		}
	}
}
```
#2. With variables
mutation NewPost($input: PostInput!) {
	newPost(input: $input) {
		id,
		title,
		author {
			firstName
		}
	}
}

"variables": {
	"input": {
		"authorId": 3,
		"title": "Ngày Mai Sẽ Khác"
	}
}
*/
