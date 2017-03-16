import React from 'react';
import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';
import SortableComponent from './draggable/draggable';

const App = ({ children }) => (
	<div>
		<HeaderContainer />
		<SidebarContainer />
		<h1>inQuizitive</h1>

		{ children }
	</div>
);

export default App;