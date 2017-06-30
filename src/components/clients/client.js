import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Badge from 'material-ui/Badge';

const Client = ({ client }) => {
  return (
    <ListItem primaryText={client.get('name')} leftAvatar={<Avatar icon={<FileFolder />} />}/>
  );

}

export default Client;
