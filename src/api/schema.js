const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');
const postAttrs = `
    id: ID
    title: String!
    body: String!
    slug: String
`;

const typeDefs = `
    type Post {
       ${postAttrs}
    }

    type Query {
        getPosts: [Post]
    }

    input postInput {
        ${postAttrs}
    }


    type Mutation {
        createPost(input: postInput): Post
    }
`;

// getCustomer(id: ID!): Post

module.exports = makeExecutableSchema({ typeDefs, resolvers });