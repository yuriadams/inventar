import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import actions from 'api/config/actions'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class ActionDialog extends Component {
  formBody = {}

  handleClose = () => {
    this.props.handleClose();
  }

  handleSubmit = () => {
    this.formBody['id'] = this.props.entity.get('id')
    this.props.fn(this.formBody);
  }

  onChange = ({ target: { value } }) => {
    const attr = this.props.textProp.toLowerCase();
    this.formBody[attr] = value;
  }

  renderForm = () => {
    return(
      <TextField
        onChange={this.onChange}
        name={this.props.textProp.toLowerCase()}
      />
    )
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
          title={`${this.props.textAction} ${this.props.entityName}`}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          {this.props.textProp}
          {(this.props.textAction === 'Deletar') ? '' : this.renderForm()}
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
      type: actions.openDialog,
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
