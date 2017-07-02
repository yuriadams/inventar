export const mapStateToProps = ({ clients }) => ({ clients });

export const clientActions = {
  add: 'CLIENT_LIST_ADD',
  edit: 'CLIENT_LIST_EDIT',
  update: 'CLIENT_LIST_UPDATE',
  delete: 'CLIENT_LIST_DELETE',
}

export const mapDispatchToProps = (dispatch) => {
  return {
    // request: () => dispatch({ type: clientActions.request }),
    // requestSuccess: payload => dispatch({
    //   type: clientActions.requestSuccess,
    //   payload
    // }),
    addClient: () => dispatch({ type: clientActions.add }),
    editClient: payload => dispatch({
      type: clientActions.edit,
      payload
    }),
    updateClient: payload => dispatch({
      type: clientActions.update,
      payload
    }),
    deleteClient: payload => dispatch({
      type: clientActions.delete,
      payload,
    }),
  };
};

export default {};
