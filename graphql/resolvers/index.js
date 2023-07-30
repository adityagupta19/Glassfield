const postResolvers = require("./post");
const userResolvers = require("./user");
const commentResolver = require('./comment');
module.exports = {
	Post:{
		likeCount(parent){
			return parent.likes.length;
		},
		commentCount(parent){ return parent.comments.length}
	},
	Query: {
		...postResolvers.Query,
		...userResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...postResolvers.Mutation,
		...commentResolver.Mutation,
	},
	Subscription:{
		...postResolvers.Subscription,
	}
};
