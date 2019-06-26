import BookCard from '../components/BookCard';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card'; //action


const mapStateToProps = ({card}) => ({
    addedCount: 0,
  });
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardActions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(BookCard);