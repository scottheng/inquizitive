import { connect } from 'react-redux';
import Header from './header';
import { logout, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
	login: (user) => dispatch(login(user)),
	clearErrors: () => dispatch(clearErrors())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);