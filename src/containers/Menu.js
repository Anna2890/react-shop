import Menu from '../components/Menu';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card'; //action
import uniqBy from 'lodash/uniqBy';


const mapStateToProps = ({card}) => ({
    totalPrice: card.items.reduce((total, book) => total + book.price, 0),
    count: card.items.length,
    items: uniqBy(card.items)
  });
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cardActions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);