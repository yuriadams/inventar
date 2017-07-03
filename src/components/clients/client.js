import React from 'react';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import FileFolder from 'material-ui/svg-icons/file/folder';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {grey400} from 'material-ui/styles/colors';

const Client = ({ client, editClient, deleteClient, navigate }) => {
  const onDeleteClient = () => {
    deleteClient(client.get('id'));
  }

  const onEditClient = () => {
    editClient(client);
  }

  const onNavigate = () => {
    navigate({
      to: 'inventories',
      memberId: client.get('id'),
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
        primaryText='Editar'
        onTouchTap={onEditClient}
      />
      <MenuItem
        primaryText='Deletar'
        onTouchTap={onDeleteClient}
      />
    </IconMenu>
  );

  return (
    <ListItem primaryText={client.get('name')}
              rightIconButton={rightIconMenu}
              onTouchTap={onNavigate}
              leftAvatar={<Avatar icon={<FileFolder />} />}/>
  );
}

export default Client;
