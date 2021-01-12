import React, { useContext } from "react";
// import "./App.css";
import logo from "./css/logo.png";
import "./css/bootstrap.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Launches from "./components/Launches";

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql", //connect the front to the backend
	cache: cache,
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="container">
				<img
					src={logo}
					alt="SpaceX"
					style={{ width: 300, display: "block", margin: "auto" }}
				/>
				<Launches />
			</div>
		</ApolloProvider>
	);
}

export default App;
