import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

import Item from 'components/items/item'
import ActionAddButton from 'components/home/actionAddButton'
import ActionDialog from 'components/home/actionDialog'

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
    const { searchManually,
            searchBarCode,
            openDialog,
            location,
            updateItem } = this.props

    return (
      <div className="Items">
        <div style={rootStyle}>

          <GridList cellHeight={180} style={styles}>
            <Subheader>
              <TextField
              hintText="Pesquisar"
              onChange={this.onChange} />
            </Subheader>
            {items}
          </GridList>
          <ActionDialog />
          <ActionAddButton
            searchManually={searchManually}
            searchBarCode={searchBarCode}
            updateItem={updateItem}
            openDialog={openDialog}
            location={location}
          />
        </div>
      </div>
    );
  }

  mappingItems = () => {
    const { items, updateItem, deleteItem, navigate, openDialog } = this.props;

    return items.map(item => (
      <Item
        key={`item-${item.get('id')}`}
        item={item}
        updateItem={updateItem}
        deleteItem={deleteItem}
        navigate={navigate}
        openDialog={openDialog}
      />
    )).toList().toJS();
  }

  onChange = ({ target: { value, dataset } }) => {
    const { searchItem } = this.props;
    searchItem(value);
  }
}

export default ItemList;
