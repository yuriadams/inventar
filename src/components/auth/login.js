import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const Login = ({ onLogin }) => (
  <RaisedButton
      target="_blank"
      secondary={true}
      label="Google Auth Log In"
      onTouchTap={onLogin}
    />
);

export default Login;
