// import the gql tagged template function
const { gql } = require('apollo-server-express')

// create the type definitions
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type Query {
        thoughts(username: String): [Thought]
    }
`

// export them
module.exports = typeDefs