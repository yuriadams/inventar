import React, { Component } from 'react';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Inventory from 'components/inventories/inventory'

class InventoryList extends Component {
  render() {
    const style = {
      marginRight: 20,
      marginTop: 20,
      float: 'right'
    };

    const inventories = this.mappingInventories();

    return (
      <div className="Inventories">
        <List>
          {inventories}
        </List>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
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
