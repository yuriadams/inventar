import React, { Component } from 'react';
import {List} from 'material-ui/List';

import Inventory from 'components/inventories/inventory'
import ActionAddButton from 'components/home/actionAddButton'
import ActionDialog from 'components/home/actionDialog'

class InventoryList extends Component {
  render() {
    const inventories = this.mappingInventories();
    const { insertManually, insertBarCode, openDialog } = this.props

    return (
      <div className="Inventories">
        <List>
          {inventories}
        </List>
        <ActionDialog />
        <ActionAddButton
          insertManually={insertManually}
          insertBarCode={insertBarCode}
          openDialog={openDialog}
        />
      </div>
    );
  }

  mappingInventories = () => {
    const { inventories, deleteInventory, navigate, openDialog } = this.props;
    return inventories.map(inventory => (
      <Inventory
        key={`inventory-${inventory.get('id')}`}
        inventory={inventory}
        deleteInventory={deleteInventory}
        navigate={navigate}
        openDialog={openDialog}
      />
    )).toList().toJS();
  }
}

export default InventoryList;
