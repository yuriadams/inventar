import React, { Component } from 'react';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Client from 'components/clients/client';

class ClientList extends Component {
  mappingClients = () => {
    const { clients } = this.props;
    return clients.map(client => (
      <Client
        key={`client-${client.get('id')}`}
        client={client}
      />
    )).toList().toJS();
  }

  render() {
    const style = {
      float: 'Right',
      position: 'Relative',
      marginRight: 20,
    };

    const clients = this.mappingClients();
    return (
      <div className="Clients">
        <List>
          {clients}
        </List>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default ClientList;
