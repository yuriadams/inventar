import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/items';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ActionDialog from 'components/home/actionDialog'

class ItemShow extends Component {
  onDeleteItem = () => {
    const { deleteItem, openDialog }  = this.props
    const item = this.getItem();

    openDialog({
      open: true,
      entityName: 'Item',
      textAction: 'Deletar',
      textProp: `Deseja excluir o item #${item.get('id')}?`,
      fn: deleteItem,
      entity: item.get('id')
    });
  }

  onEditItem = () => {
    const { editItem, openDialog }  = this.props
    const item = this.getItem();

    openDialog({
      open: true,
      entityName: 'Item',
      textAction: 'Editar',
      textProp: 'Quantidade',
      fn: editItem,
      entity: item
    });
  }

  getItem = () => {
    const { items } = this.props
    const [itemId] = this.props.location.pathname.split('/').slice(4);
    const item = items.find((item) => {
      return item.get('id') === Number.parseInt(itemId)
    });
    return item;
  }

  render() {
    const item = this.getItem();

    return (
      <div className="ItemShow">
        <ActionDialog />
        <Card>
          <CardMedia
            overlay={<CardTitle
                        title={item.get('name')}
                        subtitle={<span>código de barra: <b>{item.get('barcode')}</b></span>} />}
          >
            <img src={item.get('img')} alt="" />
          </CardMedia>
          <CardTitle title="Quantidade" subtitle={item.get('quantity')} />
          <CardActions>
            <FlatButton label="Editar" onTouchTap={this.onEditItem} />
            <FlatButton label="Deletar" onTouchTap={this.onDeleteItem}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);
