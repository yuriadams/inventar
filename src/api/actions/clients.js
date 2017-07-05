import actions from 'api/config/actions'

export const mapStateToProps = ({ clients }) => ({ clients });

export const mapDispatchToProps = (dispatch) => {
  return {
    // request: () => dispatch({ type: actions.request }),
    // requestSuccess: payload => dispatch({
    //   type: actions.requestSuccess,
    //   payload
    // }),
    addClient: () => dispatch({ type: actions.addClient }),
    editClient: payload => dispatch({
      type: actions.editClient,
      payload
    }),
    updateClient: payload => dispatch({
      type: actions.updateClient,
      payload
    }),
    deleteClient: payload => dispatch({
      type: actions.deleteClient,
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
  };
};

export default {};
