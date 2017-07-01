import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';

const Client = ({ client }) => {
  const iconStyles = {
    marginRight: 5,
    marginTop: 10,
  };
  return (
    <ListItem primaryText={client.get('name')}
              rightIconButton={<ActionDelete style={iconStyles} hoverColor={red500}/>}
              leftAvatar={<Avatar icon={<FileFolder />} />}/>

  );

}

export default Client;
