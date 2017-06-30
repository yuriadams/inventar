import React, { Component } from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Client from './client';

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
    const clients = this.mappingClients();
    return (
      <div className="Clients">
        <List>
          <Subheader inset={true}>Clients</Subheader>
          {clients}
        </List>
      </div>
    );
  }
}

export default ClientList;
