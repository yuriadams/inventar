import actions from 'api/config/actions'

export const mapStateToProps = ({ items }) => ({ items });

export const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: payload => dispatch({
      type: actions.updateItem,
      payload
    }),
    deleteItem: payload => dispatch({
      type: actions.deleteItem,
      payload,
    }),
    searchItem: payload => dispatch({
      type: actions.searchItem,
      payload,
    }),
    navigate: payload => dispatch({
      type: actions.navigate,
      payload,
    }),
    openDialog: payload => dispatch({
      type: actions.openDialog,
      payload,
    }),
    searchManually: payload => dispatch({
      type: actions.searchManually,
      payload,
    }),
    searchBarCode: payload => dispatch({
      type: actions.searchBarCode,
      payload,
    }),
  };
};

export default {};
