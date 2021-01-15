import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", //"http://localhost:4000/graphql", //https://pure-dusk-14672.herokuapp.com/",
  cache: new InMemoryCache(),
});

render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
