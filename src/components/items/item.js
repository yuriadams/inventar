import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Item = ({ item }) => {
  return (
    <GridTile
      key={item.img}
      title={item.name}
      subtitle={<span>código: <b>{item.barcode}</b></span>}
      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
      <img src={item.img} />
    </GridTile>
  );
}

export default Item;
