import React from "react";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
// import styled from 'styled-components';

// Styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
	return (
		<div>
			<Header />
			<Home />
			<GlobalStyle />
		</div>
	);
};

export default App;
