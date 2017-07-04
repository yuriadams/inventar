import actions from 'api/config/actions'

export const mapStateToProps = ({ items }) => ({ items });

export const mapDispatchToProps = (dispatch) => {
  return {
    editItem: payload => dispatch({
      type: actions.editItem,
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
    insertManually: () => dispatch({ type: actions.insertManually }),
    insertBarCode: () => dispatch({ type: actions.insertBarCode }),
  };
};

export default {};
