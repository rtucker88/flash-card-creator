const { ApolloServer, gql } = require("apollo-server");
const dictcc = require("dictcc-js");

const typeDefs = gql`
  type Definition {
    from: String
    to: String
  }

  type Query {
    getDefinitions(word: String): [Definition]
  }
`;

const resolvers = {
  Query: {
    getDefinitions: (root, args, context, info) => {
      return new Promise((resolve, reject) => {
        dictcc.translate(
          "de",
          "en",
          encodeURIComponent(args.word),
          (res, err) => {
            if (err) {
              console.error(err);
              return reject(err);
            }

            console.log(res);

            return resolve(res);
          }
        );
      });
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
