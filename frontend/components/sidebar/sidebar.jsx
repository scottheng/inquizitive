import React from 'react';
import { hashHistory, Link } from 'react-router';

class Sidebar extends React.Component {

	renderSidebar() {
		if (this.props.currentUser) {
			return(
				<aside className="sidebar">
					<h1>This is the sidebar.</h1>
					<ul className="top-sidebar">
						<li>
							<Link to="/study-sets" >
								Your Study Sets
							</Link>
						</li>
						<li>
							<Link to="/settings" >
								Settings 
							</Link>
						</li>
					</ul>

					
				</aside>
			);
		}
		else {
			return null;
		}
	}

	render() {
		return (
			this.renderSidebar()
		);
	}
}


export default Sidebar;