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
    const attr = this.props.textProp.toLowerCase();
    this.formBody[attr] = this.props.formValue;
    this.formBody['id'] = this.props.entity.get('id');
    this.formBody['callback'] = this.props.callback;
    this.props.fn(this.formBody);
  }

  onChange = ({ target: { value } }) => {
    this.props.handleFormValueChange({value: value, props: this.props});
  }

  renderForm = () => {
    return(
      <TextField
        onChange={this.onChange}
        id={this.props.textProp.toLowerCase()}
        name={this.props.textProp.toLowerCase()}
        value={this.props.formValue}
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
          {(this.props.textAction === 'Deletar') ?
          '' :
          this.renderForm()}
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
    formValue: state.dialog.get('modalProps').get('formValue'),
    fn: state.dialog.get('modalProps').get('fn'),
    callback: state.dialog.get('modalProps').get('callback'),
  }
}, (dispatch) => {
  return {
    handleFormValueChange: payload => dispatch({
      type: actions.handleFormValueChange,
      payload
    }),
    handleClose: () => dispatch({
      type: actions.openDialog,
      payload: {
        open: false,
        textProp: '',
        textAction: '',
        entityName: '',
        formValue: '',
        entity: {},
        fn: () => {
          return false;
        },
      }
    })
  }
})(ActionDialog);
