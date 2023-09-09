import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

import db from './_db.js'
import { typeDefs } from './schema.js'

const PORT = 4000
const resolvers = {
    Query:{
       games(){
         return db.games
       },
       authors(){
         return db.authors
       },
       reviews(){
         return db.reviews
       },
       review( _, args){
         return db.reviews.find((review) => review.id === args.id)
       }
    }
}
const server = new ApolloServer({
     typeDefs,
     resolvers  
})

const url = await startStandaloneServer(server,{
   listen:{ port:PORT }
})

console.log(`server started at port ${PORT}`)