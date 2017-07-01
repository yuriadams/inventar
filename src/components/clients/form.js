import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';

const ClientForm = ({  }) => {
  const style = {
    marginLeft: 20,
  }

  const btnStyle = {
    float: 'right',
  }

  return (
    <div style={style}>
      <TextField
        hintText="Cliente"
      />
      <IconButton style={btnStyle}>
        <ActionDone />
      </IconButton>
    </div>
  );

}

export default ClientForm;
