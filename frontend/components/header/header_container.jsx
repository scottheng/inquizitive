import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

export default connect(
	mapStateToProps
)(Header);