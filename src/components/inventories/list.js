import React, { Component } from 'react';
import {List} from 'material-ui/List';

import Inventory from 'components/inventories/inventory'
import ActionAddButton from 'components/inventories/actionAddButton'

class InventoryList extends Component {
  render() {
    const inventories = this.mappingInventories();
    const { insertManually, insertBarCode } = this.props

    return (
      <div className="Inventories">
        <List>
          {inventories}
        </List>
        <ActionAddButton
          insertManually={insertManually}
          insertBarCode={insertBarCode}
        />
      </div>
    );
  }

  mappingInventories = () => {
    const { inventories, deleteInventory } = this.props;
    return inventories.map(inventory => (
      <Inventory
        key={`inventory-${inventory.get('id')}`}
        inventory={inventory}
        deleteInventory={deleteInventory}
      />
    )).toList().toJS();
  }
}

export default InventoryList;
