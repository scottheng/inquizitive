import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
	currentUser: state.currentUser
});

export default connect(
	mapStateToProps
)(Splash);