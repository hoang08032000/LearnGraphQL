import "./App.css";
import BookList from "./components/BookList";
import Form from "./components/Form";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h1>My book</h1>
                <hr />
                <Form />
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
