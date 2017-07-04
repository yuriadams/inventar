import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Item = ({ item }) => {
  return (
    <GridTile
      key={item.get('img')}
      title={item.get('name')}
      subtitle={<span>quantidade: <b>{item.get('quantity')}</b></span>}>
      <img src={item.get('img')} />
    </GridTile>
  );
}

export default Item;
