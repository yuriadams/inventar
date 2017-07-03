import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/clients';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import {green400} from 'material-ui/styles/colors';

class ClientForm extends Component {
  add = () => {
    this.props.addClient();
  }

  render() {
    const style = {
      marginLeft: 20,
    }

    const btnStyle = {
      float:   'right',
      width: 72,
      height: 72,
      padding: 16,
    }

    const iconStyle = {
      width: 36,
      height: 36,
    }

    return (
      <div style={style}>
        <TextField
          hintText="Cliente"
        />
        <IconButton
          touch={true}
          style={btnStyle}
          iconStyle={iconStyle}
          onTouchTap={this.add}>
          <ActionCheckCircle color={green400}/>
        </IconButton>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);
