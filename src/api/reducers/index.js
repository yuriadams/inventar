import clients from 'api/reducers/clients';
import inventories from 'api/reducers/inventories';
import items from 'api/reducers/items';
import dialog from 'api/reducers/dialog';

function userReducer(user = {}, action) {
  if (action.type === 'logged') {
    return action.payload || {};
  }
  return user;
}

export default {
  user: userReducer,
  clients,
  inventories,
  items,
  dialog,
};
