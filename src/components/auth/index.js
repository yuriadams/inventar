import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'components/auth/login';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/auth';

class Container extends Component {

  componentDidUpdate() {
    const { user, redirectToHome } = this.props;
    redirectToHome(user.uid);
  }

  render() {
    const { onLoginGoogle, onLogin, user } = this.props;
    return <Login
              onLoginGoogle={onLoginGoogle}
              onLogin={onLogin}
              user={user}
          />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
