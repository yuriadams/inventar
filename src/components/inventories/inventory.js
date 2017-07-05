import React from 'react';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import FileFolder from 'material-ui/svg-icons/file/folder';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {grey400} from 'material-ui/styles/colors';

const Inventory = ({ inventory, deleteInventory, navigate, openDialog }) => {
  const onDeleteInventory = () => {
    openDialog({
      open: true,
      entityName: 'Inventório',
      textAction: 'Deletar',
      textProp: `Deseja excluir o inventório #${inventory.get('id')}?`,
      fn: deleteInventory,
      entity: inventory.get('id')
    });
  }

  const onNavigate = () => {
    navigate({
      to: 'items',
      memberId: inventory.get('id'),
    })
  }

  const iconButtonElement = (
    <IconButton
      touch={false}
      tooltip="more"
      tooltipPosition="bottom-left">
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem
        primaryText='Deletar'
        onTouchTap={onDeleteInventory}
      />
    </IconMenu>
  );

  return (
    <ListItem primaryText={inventory.get('name')}
              rightIconButton={rightIconMenu}
              onTouchTap={onNavigate}
              leftAvatar={<Avatar icon={<FileFolder />} />}/>
  );
}

export default Inventory;
