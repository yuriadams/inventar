import React, { Component } from 'react';
import {List} from 'material-ui/List';

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
    const clients = this.mappingClients();
    return (
      <div className="Clients">
        <List>
          {clients}
        </List>
      </div>
    );
  }
}

export default ClientList;
