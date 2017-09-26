/**
 * Step 2: Implement query parameters, passing arguments to resolver
 * ! at argument marks required arguments
 *
 * Sub-step #1: Change `args` to { name }
 * Sub-step #2: Use variable with query placeholder
 */
// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
	type Query {
		hello: String,
		echo(name: String!): String,
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello(root, args) {
			return 'Hello world!';
		},

		echo(root, args) {
			let name = args.name;
			return `Hello ${name.toUpperCase()}. Greetings from GraphQL Server. Ahihi.`;
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

/*
Sub-step #2: Query to try in GraphiQL
```
query Echo(name: String) {
	echo(name: $name)
}
```
 */



