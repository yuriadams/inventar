import { connect } from 'react-redux';
import Toolbar from 'components/toolbar/dummy';

export default connect(state => {
  return {
    // user: state.user,
  }
}, (dispatch) => {

  return {
    // logout: () => dispatch({ type: 'logout' })
  }

})(Toolbar);
