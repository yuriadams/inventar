import actions from 'api/config/actions'

export const mapStateToProps = ({ inventories }) => ({ inventories });

export const mapDispatchToProps = (dispatch) => {
  return {
    searchManually: payload => dispatch({
      type: actions.searchManually,
      payload,
    }),
    searchBarCode: payload => dispatch({
      type: actions.searchBarCode,
      payload,
    }),
    addInventory: () => dispatch({ type: actions.addInventory }),
    editInventory: payload => dispatch({
      type: actions.editInventory,
      payload,
    }),
    updateInventory: payload => dispatch({
      type: actions.updateInventory,
      payload,
    }),
    deleteInventory: payload => dispatch({
      type: actions.deleteInventory,
      payload,
    }),
    navigate: payload => dispatch({
      type: actions.navigate,
      payload,
    }),
    updateItem: payload => dispatch({
      type: actions.updateItem,
      payload
    }),
    openDialog: payload => dispatch({
      type: actions.openDialog,
      payload,
    }),
    handleFormValueChange: payload => dispatch({
      type: actions.handleFormValueChange,
      payload,
    }),
  };
};

export default {};
