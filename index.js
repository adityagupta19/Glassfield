const { ApolloServer } = require("apollo-server");
const { PubSub } = require("graphql-subscriptions");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");

const pubsub = new PubSub();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req, pubsub }),
});

mongoose
	.connect(process.env.MONGOURI)
	.then(() => {
		return server.listen({ port: 5000 });
	})
	.then((res) => {
		console.log(`Server is running at ${res.url}`);
	});
