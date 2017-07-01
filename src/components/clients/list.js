import React, { Component } from 'react';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Client from 'components/clients/client';
import ClientForm from 'components/clients/form';

class ClientList extends Component {
  render() {
    const clients = this.mappingClients();
    return (
      <div className="Clients">
        <List>
          {clients}
        </List>
        <ClientForm
          key={`client-form`}
        />
      </div>
    );
  }

  mappingClients = () => {
    const { clients } = this.props;
    return clients.map(client => (
      <Client
        key={`client-${client.get('id')}`}
        client={client}
      />
    )).toList().toJS();
  }
}

export default ClientList;
