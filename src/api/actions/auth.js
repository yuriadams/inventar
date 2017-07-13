import { push } from 'react-router-redux';
import actions from 'api/config/actions'

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => {
  return {
    redirectToHome: (uid) => {
      if (uid) {
        dispatch(push('/'));
      }
    },
    redirectToLogin: (uid) => {
      if (!uid) {
        dispatch(push('/login'));
      }
    },
    onLogin: payload => dispatch({ type: actions.login, payload }),
    onLoginGoogle: () => dispatch({ type: actions.loginGoogle })
  };
};

export default {};
