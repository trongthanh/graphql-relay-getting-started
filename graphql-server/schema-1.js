/**
 * Step 1: Start simple GraphQL logic running with Apollo graphql-tools
 */
// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello(root, args, context) {
			return 'Hello world!';
		},
	},
};

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export function context(headers, secrets) {
	return {
		headers,
		secrets,
	};
}

