const { ApolloServer, gql } = require('apollo-server');

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;

// const names = ['ぽち', 'たま', 'うさ']
// 
// const resolvers = {
//   Query: {
//     pets(parent, args, context, info) {
//       // return select * from pets where is_delete is null
//       return names[Math.floor(Math.random() * names.length)]
//     }
//   },
// };

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  // resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});