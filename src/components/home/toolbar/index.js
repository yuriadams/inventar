import actions from 'api/config/actions'
import { connect } from 'react-redux';
import Toolbar from 'components/home/toolbar/dummy';

export default connect(state => {
  return {
    location: state.router.location,
    user: state.user,
  }
}, (dispatch) => {
  return {
    logout: () => dispatch({ type: actions.logout })
  }

})(Toolbar);
