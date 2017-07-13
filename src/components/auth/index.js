import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'components/auth/login';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/auth';

class Container extends React.Component {

  componentDidUpdate() {
    const { user, redirectToHome } = this.props;
    redirectToHome(user.uid);
  }

  render() {
    const { onLoginGoogle } = this.props;
    return <Login onLoginGoogle={onLoginGoogle} />
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);
