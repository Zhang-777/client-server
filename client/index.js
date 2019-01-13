import React from 'react'
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Home from './components/home'

const client = new ApolloClient({
    uri: "http://localhost:4000"
})

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    </ApolloProvider>
);

render(<App />, document.getElementById("root"));
