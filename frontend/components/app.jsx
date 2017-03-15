import React from 'react';
import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = ({ children }) => (
	<div>
		<HeaderContainer />
		<SidebarContainer />
		<h1>inQuizitive</h1>
		{ children }
	</div>
);

export default App;