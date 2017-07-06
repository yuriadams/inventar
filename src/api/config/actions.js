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
  editItem: `${NAMESPACE}_ITEM_LIST_EDIT`,
  updateItem: `${NAMESPACE}_ITEM_LIST_UPDATE`,
  deleteItem: `${NAMESPACE}_ITEM_LIST_DELETE`,
  searchItem: `${NAMESPACE}_ITEM_LIST_SEARCH`,
  searchManually: `${NAMESPACE}_INVENTORY_INSERT_MANUALLY`,
  searchBarCode: `${NAMESPACE}_INVENTORY_INSERT_BAR_CODE`,
  openDialog: `${NAMESPACE}_OPEN_MODAL`,
}

export default actions;
