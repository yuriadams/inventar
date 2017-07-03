import React, { Component } from 'react';
import {List} from 'material-ui/List';
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
    const { clients, editClient, deleteClient, navigate } = this.props;

    return clients.map(client => (
      <Client
        key={`client-${client.get('id')}`}
        client={client}
        editClient={editClient}
        deleteClient={deleteClient}
        navigate={navigate}
      />
    )).toList().toJS();
  }
}

export default ClientList;
