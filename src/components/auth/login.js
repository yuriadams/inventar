import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import ActionLock from 'material-ui/svg-icons/action/lock'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const cardStyle = {
  width: '80%',
  position: 'absolute',
  top: '30%',
  left: '10%',
}

const titleStyle = {
  textAlign: 'center'
}

const Login = ({ onLogin }) => (
  <Card style={cardStyle}>
    <CardTitle title='Login:' style={titleStyle}/>
    <Divider />
    <CardText>
      <TextField
        hintText="Email"
        floatingLabelText="Email"
      />
      <TextField
        hintText="Senha"
        floatingLabelText="Senha"
        type="password"
      />
    </CardText>
    <CardActions>
      <RaisedButton
          target="_blank"
          primary={true}
          label="Login"
          onTouchTap={onLogin}
        />
      <RaisedButton
          target="_blank"
          secondary={true}
          label="Login Google"
          onTouchTap={onLogin}
        />
    </CardActions>
  </Card>
);

export default Login;
