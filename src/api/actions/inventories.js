import actions from 'api/config/actions'

export const mapStateToProps = ({ inventories }) => ({ inventories });

export const inventoryActions = {
  add: 'INVENTORY_LIST_ADD',
  edit: 'INVENTORY_LIST_EDIT',
  update: 'INVENTORY_LIST_UPDATE',
  delete: 'INVENTORY_LIST_DELETE',
}

export const mapDispatchToProps = (dispatch) => {
  return {
    // request: () => dispatch({ type: inventoryActions.request }),
    // requestSuccess: payload => dispatch({
    //   type: inventoryActions.requestSuccess,
    //   payload
    // }),
    addInventory: () => dispatch({ type: inventoryActions.add }),
    editInventory: payload => dispatch({
      type: inventoryActions.edit,
      payload
    }),
    updateInventory: payload => dispatch({
      type: inventoryActions.update,
      payload
    }),
    deleteInventory: payload => dispatch({
      type: inventoryActions.delete,
      payload,
    }),
  };
};

export default {};
