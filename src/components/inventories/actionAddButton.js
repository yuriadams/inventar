import React, { Component } from 'react';

import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ImageCropFree from 'material-ui/svg-icons/image/crop-free';
import ActionCode from 'material-ui/svg-icons/action/code';

class ActionAddButton extends Component {
  render() {
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
          //  onTouchTap={this.startNewGame}
         />

         <SpeedDialItem
           label="Código de Barras"
           fabContent={<ImageCropFree/>}
          //  onTouchTap={this.startNewPage}
         />
       </SpeedDial>

    );
  }
}

export default ActionAddButton;
