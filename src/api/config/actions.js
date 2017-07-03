import NAMESPACE from 'api/config/namespace';

const actions = {
  navigate: `${NAMESPACE}_NAVIGATION`,
  addClient: `${NAMESPACE}_CLIENT_LIST_ADD`,
  editClient: `${NAMESPACE}_CLIENT_LIST_EDIT`,
  updateClient: `${NAMESPACE}_CLIENT_LIST_UPDATE`,
  deleteClient: `${NAMESPACE}_CLIENT_LIST_DELETE`,
  addInventory: `${NAMESPACE}_INVENTORY_LIST_ADD`,
  editInventory: `${NAMESPACE}_INVENTORY_LIST_EDIT`,
  updateInventory: `${NAMESPACE}_INVENTORY_LIST_UPDATE`,
  deleteInventory: `${NAMESPACE}_INVENTORY_LIST_DELETE`,
}

export default actions;
