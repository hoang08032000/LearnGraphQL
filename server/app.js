require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const PORT = process.env.PORT;

const mongoose = require("mongoose");

/// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load DB methods
const mongoDataMethods = require("./data/db");

/// connnect to mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.bzzoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        );
        console.log("~~~ MongoDB connected ~~~~");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods }),
    });
    const app = express();
    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
    });
}

startApolloServer(typeDefs, resolvers);
