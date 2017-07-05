import React, {Component} from 'react';

import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from 'api/actions/dialog';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ActionDialog extends Component {
  // state = {
  //   open: false,
  // };

  // handleOpen = () => {
  //   this.setState({open: true});
  // };
  //
  // handleClose = () => {
  //   this.setState({open: false});
  // };
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        // onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        {/* <RaisedButton label="Dialog With Date Picker" onTouchTap={this.handleOpen} /> */}
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.props.open}
          // onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
          <TextField hintText="TEXT" />
        </Dialog>
      </div>
    );
  }
}

export default connect(state => {
  return {
    open: state.dialog.get('modalProps').get('open')
  }
}, {})(ActionDialog);
