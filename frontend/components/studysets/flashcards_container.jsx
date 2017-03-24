import { connect } from 'react-redux';
import Flashcards from './flashcards';

const mapStateToProps = state => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Flashcards);