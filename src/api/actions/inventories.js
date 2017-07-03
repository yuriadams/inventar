import actions from 'api/config/actions'

export const mapStateToProps = ({ inventories }) => ({ inventories });

export const mapDispatchToProps = (dispatch) => {
  return {
    insertManually: () => dispatch({ type: actions.insertManually }),
    insertBarCode: () => dispatch({ type: actions.insertBarCode }),
    addInventory: () => dispatch({ type: actions.addInventory }),
    editInventory: payload => dispatch({
      type: actions.editInventory,
      payload
    }),
    updateInventory: payload => dispatch({
      type: actions.updateInventory,
      payload
    }),
    deleteInventory: payload => dispatch({
      type: actions.deleteInventory,
      payload,
    }),
  };
};

export default {};
