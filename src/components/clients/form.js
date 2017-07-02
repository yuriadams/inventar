import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/clients';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';

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
          <ContentAddCircle />
        </IconButton>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);
