import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import ActionLock from 'material-ui/svg-icons/action/lock'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class Login extends Component {
  cardStyle = {
    width: '80%',
    position: 'absolute',
    top: '30%',
    left: '10%',
  }

  titleStyle = {
    textAlign: 'center'
  }

  formStyle = {
    left: '10%',
    position: 'relative',
  }

  onLogin = () => {
    const { user, onLogin } = this.props;
    onLogin(user);
  }

  onLoginGoogle = () => {
    this.props.onLoginGoogle();
  }

  onChangeForm = ({ target: { value, name } }) => {
    const { user } = this.props;
    user[name] = value;
  }

  render() {
    const { user } = this.props;
    return (
      <Card style={this.cardStyle}>
        <CardTitle title='Login:' style={this.titleStyle}/>
        <Divider />
        <CardText>
          <div style={this.formStyle}>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              name='email'
              value={user.email}
              onChange={this.onChangeForm}
            />
            <TextField
              hintText='Senha'
              floatingLabelText='Senha'
              type='password'
              name='senha'
              value={user.password}
              onChange={this.onChangeForm}
            />
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
              target="_blank"
              primary={true}
              label="Login"
              onTouchTap={this.onLogin}
            />
          <RaisedButton
              target="_blank"
              secondary={true}
              label="Login Google"
              onTouchTap={this.onLoginGoogle}
            />
        </CardActions>
      </Card>
    )
  }
}

export default Login;
