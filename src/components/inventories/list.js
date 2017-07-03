import React, { Component } from 'react';
import {List} from 'material-ui/List';

import Inventory from 'components/inventories/inventory'
import ActionAddButton from 'components/inventories/actionAddButton'

class InventoryList extends Component {
  render() {
    const inventories = this.mappingInventories();

    return (
      <div className="Inventories">
        <List>
          {inventories}
        </List>
        <ActionAddButton />
      </div>
    );
  }

  mappingInventories = () => {
    const { inventories } = this.props;

    return inventories.map(inventory => (
      <Inventory
        key={`inventory-${inventory.get('id')}`}
        inventory={inventory}
      />
    )).toList().toJS();
  }
}

export default InventoryList;
