import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';

const Item = ({ item, editItem, deleteItem }) => {
  const onDeleteItem = () => {
    deleteItem(item.get('id'));
  }

  const onEditItem = () => {
    editItem(item);
  }

  const iconButtonElement = (
    <IconButton
      touch={false}
      tooltip="more"
      tooltipPosition="bottom-left">
      <MoreVertIcon color={white} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem
        primaryText='Editar'
        onTouchTap={onEditItem}
      />
      <MenuItem
        primaryText='Deletar'
        onTouchTap={onDeleteItem}
      />
    </IconMenu>
  );

  return (
    <GridTile
      key={item.get('img')}
      title={item.get('name')}
      actionIcon={rightIconMenu}
      subtitle={<span>quantidade: <b>{item.get('quantity')}</b></span>}>
      <img src={item.get('img')} />
    </GridTile>
  );
}

export default Item;
