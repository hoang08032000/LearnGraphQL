const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
    // QUERY
    Query: {
        // Get all
        books: async (parent, args, { mongoDataMethods }) => {
            return await mongoDataMethods.getAllBooks();
        },
        authors: async (parent, args, { mongoDataMethods }) => {
            return await mongoDataMethods.getAllAuthors();
        },

        // Get by id
        book: async (parent, { id }, { mongoDataMethods }) => {
            return await mongoDataMethods.getBookById(id);
        },
        author: async (parent, { id }, { mongoDataMethods }) => {
            return await mongoDataMethods.getAuthorById(id);
        },
    },

    Book: {
        author: async ({ authorId }, args, { mongoDataMethods }) => {
            return await mongoDataMethods.getAuthorById(authorId);
        },
    },

    Author: {
        books: async ({ id }, args, { mongoDataMethods }) => {
            console.log(id)
            return await mongoDataMethods.getAllBooks({ authorId: id });
        },
    },

    // MUTATION
    Mutation: {
        // Create
        createAuthor: async (parent, args, { mongoDataMethods }) => {
            return await mongoDataMethods.createAuthor(args);
        },
        createBook: async (parent, args, { mongoDataMethods }) => {
            return await mongoDataMethods.createBook(args);
        },
    },
};

module.exports = resolvers;
