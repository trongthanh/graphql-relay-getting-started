/**
 * Step 3: Introduce GraphQL scala types: String, Int, Float, Boolean, ID
 * List indicated with []
 *
 */
// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
	type Query {
		hello: String,
		echo(name: String!): String,
		random: Float!,
		randomRange(fromInt: Int!, toInt: Int!): Int!,
		isItTrue: Boolean!,
		names: [String]!
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		hello(root, args) {
			return 'Hello world!';
		},

		echo(root, { name }) {
			return `Hello ${name.toUpperCase()}. Greetings from GraphQL Server. Ahihi.`;
		},

		random() {
			return Math.random();
		},

		randomRange(root, { fromInt, toInt }) {
			return fromInt + Math.floor(Math.random() * (toInt - fromInt + 1));
		},

		isItTrue() {
			return Math.random() < 0.5;
		},

		names() {
			return ['Linh', 'Tiên', 'Phương', 'My'];
		}
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
