import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/items';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ItemShow extends Component {
  onEditItem = () => {
    const { editItem }  = this.props
    const item = this.getItem();
    editItem(item);
  }

  onDeleteItem = () => {
    const { deleteItem }  = this.props
    const item = this.getItem();
    deleteItem(item.get('id'));
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
