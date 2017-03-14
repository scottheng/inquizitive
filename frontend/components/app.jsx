import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
	<div>
		<HeaderContainer />
		<h1>inQuizitive</h1>
		{ children }
	</div>
);

export default App;