import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

export default connect(
	mapStateToProps
)(Sidebar);