import React, { useState } from "react";
import BookDetail from "./BookDetail";
import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql-client/queries";

const BookList = () => {
    const [bookSelected, setBookSelected] = useState(null);
    const { loading, error, data } = useQuery(getBooks);

    if (loading) return <div>Loading books ...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="book-list">
            <div>
                {data.books.map((book) => {
                    return (
                        <div
                            className="book"
                            key={book.id}
                            onClick={setBookSelected.bind(this, book.id)}
                        >
                            {book.name}
                        </div>
                    );
                })}
            </div>

            <BookDetail bookId={bookSelected} />
        </div>
    );
};

export default BookList;
