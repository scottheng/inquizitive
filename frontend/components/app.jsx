import React from 'react';
import HeaderContainer from './header/header_container';
// import SortableComponent from './draggable/draggable';



const App = ({ children }) => (
	<div>
		<HeaderContainer />

		{ children }
	</div>
);

export default App;