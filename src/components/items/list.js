import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Item from 'components/items/item'
import ActionAddButton from 'components/inventories/actionAddButton'

class ItemList extends Component {
  render() {
    const styles = {
      width: '100%',
      height: '100%',
      overflowY: 'scroll',
    };

    const rootStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    };

    const items = this.mappingItems();
    const { insertManually, insertBarCode } = this.props

    return (
      <div className="Items">
        <div style={rootStyle}>

          <GridList cellHeight={180} style={styles}>
            <Subheader>Items</Subheader>
            {items}
          </GridList>
          <ActionAddButton
            insertManually={insertManually}
            insertBarCode={insertBarCode}
          />
        </div>
      </div>
    );
  }

  mappingItems = () => {
    const { items } = this.props;

    return items.map(item => (
      <Item
        key={`item-${item.get('id')}`}
        item={item}
      />
    )).toList().toJS();
  }
}

export default ItemList;
