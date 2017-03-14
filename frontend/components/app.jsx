import React from 'react';
import Header from './header/header';

const App = ({ children }) => (
	<div>
		<Header />
		<h1>inQuizitive</h1>
		{ children }
	</div>
);

export default App;