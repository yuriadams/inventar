import React, { Component } from 'react';
import {List} from 'material-ui/List';
import Client from 'components/clients/client';
import ClientForm from 'components/clients/form';
import ActionDialog from 'components/home/actionDialog'

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
        <ActionDialog />
      </div>
    );
  }

  mappingClients = () => {
    const { clients, editClient, deleteClient, navigate, toggleModal } = this.props;

    return clients.map(client => (
      <Client
        key={`client-${client.get('id')}`}
        client={client}
        editClient={editClient}
        deleteClient={deleteClient}
        navigate={navigate}
        toggleModal={toggleModal}
      />
    )).toList().toJS();
  }
}

export default ClientList;
