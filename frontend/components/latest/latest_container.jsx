import { connect } from 'react-redux';
import Latest from './latest';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

export default connect(
	mapStateToProps
)(Latest);