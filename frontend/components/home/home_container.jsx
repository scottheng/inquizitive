import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
});

export default connect(
	mapStateToProps
)(Home);