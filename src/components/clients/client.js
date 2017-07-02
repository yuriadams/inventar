import React from 'react';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import FileFolder from 'material-ui/svg-icons/file/folder';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import {grey400, darkBlack} from 'material-ui/styles/colors';

const Client = ({ client }) => {
  const iconStyles = {
    marginRight: 5,
    marginTop: 10,
  };

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
      <MenuItem>Editar</MenuItem>
      <MenuItem>Deletar</MenuItem>
    </IconMenu>
  );

  return (
    <ListItem primaryText={client.get('name')}
              rightIconButton={rightIconMenu}
              leftAvatar={<Avatar icon={<FileFolder />} />}/>
  );
}

export default Client;
