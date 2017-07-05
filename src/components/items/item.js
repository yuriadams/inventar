import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';

const Item = ({ item, editItem, deleteItem, navigate, openDialog }) => {
  const onDeleteItem = () => {
    openDialog({
      open: true,
      entityName: 'Item',
      textAction: 'Deletar',
      textProp: `Deseja excluir o item #${item.get('id')}?`,
      fn: deleteItem,
      entity: item.get('id')
    });
  }

  const onEditItem = () => {
    openDialog({
      open: true,
      entityName: 'Item',
      textAction: 'Editar',
      textProp: 'Quantidade',
      fn: editItem,
      entity: item
    });
  }

  const onNavigate = () => {
    navigate({
      to: 'itemShow',
      memberId: item.get('inventory_id'),
      itemId: item.get('id')
    })
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
        primaryText='Visualizar'
        onTouchTap={onNavigate}
      />
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
      <img alt='' src={item.get('img')} />
    </GridTile>
  );
}

export default Item;
