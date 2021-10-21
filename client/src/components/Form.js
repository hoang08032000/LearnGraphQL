import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({});

    const { bookName, bookGenre, author, authorName, authorAge } = form;

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3>Add book</h3>
            <form action="">
                <input
                    type="text"
                    name="bookName"
                    placeholder="book name"
                    onChange={onChangeForm}
                    value={bookName}
                />
                <input
                    type="text"
                    name="bookGenre"
                    placeholder="book genre"
                    onChange={onChangeForm}
                    value={bookGenre}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="author"
                    onChange={onChangeForm}
                    value={author}
                />
                <input type="submit" value="Add book" />
            </form>
            <h3>Add author</h3>
            <form action="">
                <input
                    type="text"
                    name="authorName"
                    placeholder="author name"
                    onChange={onChangeForm}
                    value={authorName}
                />
                <input
                    type="text"
                    name="authorAge"
                    placeholder="author age"
                    onChange={onChangeForm}
                    value={authorAge}
                />
                <input type="submit" value="Add book" />
            </form>
        </div>
    );
};

export default Form;
