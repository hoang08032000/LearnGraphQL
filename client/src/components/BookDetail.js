import { useQuery } from "@apollo/client";
import React from "react";
import { getSingleBook } from "../graphql-client/queries";

const BookDetail = ({ bookId }) => {
    const { loading, error, data } = useQuery(getSingleBook, {
        variables: {
            id: bookId,
        },
        skip: bookId === null,
    });

    let body;

    if (loading) body = <div>Loading ...</div>;
    if (bookId !== null && error) body = <div>Error</div>;

    if (data) {
        const book = data.book;

        console.log(book);
        body = (
            <div className="book-detail">
                <div className="title">Tên sách: {book.name}</div>
                <div className="name">Tác giả: {book.author.name}</div>
                <div className="age">Tuổi: {book.author.age}</div>
                <ul>
                    {book.author.books.map((a) => {
                        return <li key={a.id}>{a.name}</li>;
                    })}
                </ul>
            </div>
        );
    }

    return <>{body}</>;
};

export default BookDetail;
