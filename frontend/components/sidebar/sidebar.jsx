import React from 'react';
import { hashHistory, Link } from 'react-router';

class Sidebar extends React.Component {

	renderSidebar() {
		if (this.props.currentUser) {
			return(
				<aside className="sidebar">
					<ul className="top-sidebar">
						<li>
							<div className="link" >
								<Link to={`/${this.props.currentUser.username}`} >
									<i className="fa fa-square"></i>
									Your Study Sets
								</Link>
							</div>
						</li>
						<li>
							<div className="link" >
								<Link to="/settings" >
									<i className="fa fa-cog" ></i>
									Settings 
								</Link>
							</div>
						</li>
					</ul>
					<ul className="folders-sidebar">
						<li>
							<div className="sidebar-header" >
								<Link to="/folders">
									YOUR FOLDERS
								</Link>
							</div>
						</li>
						<li>
							<div className="link" >
								<Link to="/folders/:folderId">
									<i className="fa fa-folder" aria-hidden="true"></i>
									Folder Name 
								</Link>
							</div>
						</li>
						<li>
							<div className="link" >
								<Link to="/folders/:folderId">
									<i className="fa fa-folder" aria-hidden="true"></i>
									Folder Name 2
								</Link>
							</div>
						</li>						<li>
							<div className="link" >
								<Link to="/folders/:folderId">
									<i className="fa fa-folder" aria-hidden="true"></i>
									Folder Name 3
								</Link>
							</div>
						</li>
						<li>
							<div className="link" id="modal-link">
								<Link to="/folders/new" >
									<i className="fa fa-plus" aria-hidden="true"></i>
									Create a folder 
								</Link>
							</div>
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