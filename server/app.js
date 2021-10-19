const express = require("express");
const { ApolloServer } = require("apollo-server-express");

/// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });

// const app = express();

// await server.start();

// server.applyMiddleware({ app });

// app.listen(8080, () => {
//     console.log(`Server ready at http"//localhost/8080/${server.graphqlPath}`);
// });

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    await server.start();
    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server is listening on port 4000${server.graphqlPath}`);
    });
}

startApolloServer(typeDefs, resolvers);
