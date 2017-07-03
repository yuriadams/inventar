import React, { Component } from 'react';

import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ImageCropFree from 'material-ui/svg-icons/image/crop-free';
import ActionCode from 'material-ui/svg-icons/action/code';

const ActionAddButton = ({ insertManually, insertBarCode }) => {
  const onInsertManually = () => {
    insertManually();
  }

  const onInsertBarCode = () => {
    insertBarCode();
  }

  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  return (
    <SpeedDial
       style={style}
       fabContentOpen={<ContentAdd />}
       fabContentClose={<NavigationClose />}>

       <SpeedDialItem
         label="Inserir Manualmente"
         fabContent={<ActionCode/>}
         onTouchTap={onInsertManually}
       />

       <SpeedDialItem
         label="Código de Barras"
         fabContent={<ImageCropFree/>}
         onTouchTap={onInsertBarCode}
       />
     </SpeedDial>
  );
}

export default ActionAddButton;
