export const typeDefs = `#graphql

    type Game {
        id: ID!, # ! --> indicates required field
        title: String!,
        platform: [String]!
    }
    type Review {
        id:ID!
        rating:Int!
        content:String!
    }
    type Author {
        id:ID!
        name:String!
        verified:Boolean!
    }
    type Query {
        reviews:[Review],
        review(id: ID!):Review,   #<- to send single data for query with id 
        authors:[Author],    #<--- where graphql can start from
        games:[Game]
    }

`