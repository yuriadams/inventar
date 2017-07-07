import { takeLatest, call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import actions from 'api/config/actions';

function* searchSuccessfull({ payload }) {
  const item = fromJS({
    id: 1,
    name: 'Toalha de Mesa',
    barcode: 32345678890,
    quantity: 2,
    inventory_id: 1,
    img: 'http://havan.vteximg.com.br/arquivos/ids/2520599-1200-1200/toalha-de-mesa-quadrada-140x140-requinte-dohler-2-13.jpg'
  })

  yield put({ type: actions.openDialog, payload: {
      open: true,
      entityName: `Item ${payload.barcode}`,
      textAction: 'Editar',
      textProp: 'Quantidade',
      formValue: '',
      fn: payload.callback,
      entity: item
    }
  });
}

export default function* searchBarCode() {
  yield takeLatest(actions.searchBarCode, searchSuccessfull);
}
