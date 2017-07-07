import React from 'react';

import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ImageCropFree from 'material-ui/svg-icons/image/crop-free';
import ActionCode from 'material-ui/svg-icons/action/code';

const ActionAddButton = ({ searchManually,
                           searchBarCode,
                           updateItem,
                           openDialog,
                           location,
                         }) => {

  const onsearchManually = () => {
    openDialog({
      open: true,
      entityName: 'Item',
      textAction: 'Pesquisar',
      textProp: 'Codigo',
      fn: searchManually,
      callback: updateItem,
      entity: {}
    });
  }

  const onsearchBarCode = () => {
    window.location = `mochabarcode://CALLBACK=http://192.168.15.15:3000${location.pathname}`;
  }

  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  const barCodeCallBack = () => {
    const barcode = window.location.search.split('BARCODE=')[1];
    if(barcode){
      searchBarCode({ barcode: barcode, callback: updateItem })
    }
  }

  return (
    <SpeedDial
       onLoadStart={barCodeCallBack()}
       style={style}
       fabContentOpen={<ContentAdd />}
       fabContentClose={<NavigationClose />}>

       <SpeedDialItem
         label="Inserir Manualmente"
         fabContent={<ActionCode/>}
         onTouchTap={onsearchManually}
       />

       <SpeedDialItem
         label="Código de Barras"
         fabContent={<ImageCropFree/>}
         onTouchTap={onsearchBarCode}
       />
     </SpeedDial>
  );
}

export default ActionAddButton;
