import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from 'api/config/actions'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class ActionDialog extends Component {
  handleClose = () => {
    this.props.handleClose();
  }

  handleSubmit = () => {
    this.props.fn(this.props.entity);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={this.props.textAction}
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title={`Editar ${this.props.entityName}`}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          {this.props.textProp}
          <TextField
            name={this.props.textProp.toLowerCase()}
          />
        </Dialog>
      </div>
    );
  }
}

export default connect(state => {
  return {
    open: state.dialog.get('modalProps').get('open'),
    textAction: (state.dialog.get('modalProps').get('textAction') || 'Default'),
    textProp: state.dialog.get('modalProps').get('textProp'),
    entityName: state.dialog.get('modalProps').get('entityName'),
    entity: state.dialog.get('modalProps').get('entity'),
    fn: state.dialog.get('modalProps').get('fn'),
  }
}, (dispatch) => {
  return {
    handleClose: () => dispatch({
      type: actions.toggleModal,
      payload: {
        open: false,
        textProp: '',
        textAction: '',
        entityName: '',
        entity: {},
        fn: () => {
          return false;
        },
      }
    })
  }
})(ActionDialog);
