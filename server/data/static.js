const books = [
    {
        id: 1,
        name: "Hoangtoviet",
        genre: "advantrure",
        authorId: 1,
    },
    {
        id: 2,
        name: "Hoangtoviet2",
        genre: "edu",
        authorId: 2,
    },
    {
        id: 3,
        name: "Hoangtoviet3",
        genre: "edu",
        authorId: 3,
    },
];

const authors = [
    {
        id: 1,
        name: "Tac gia 1",
        age: 11,
        bookId: [1],
    },
    {
        id: 2,
        name: "Tac gia 2",
        age: 12,
        bookId: [2],
    },
    {
        id: 3,
        name: "Tac gia 3",
        age: 13,
        bookId: [3],
    },
];

module.exports = {
    books,
    authors,
};
