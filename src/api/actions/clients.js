export const mapStateToProps = ({ clients }) => ({ clients });

export const actions = {
  add: 'CLIENT_LIST_ADD',
}

export const mapDispatchToProps = (dispatch) => {
  return {
    // request: () => dispatch({ type: actions.request }),
    // requestSuccess: payload => dispatch({
    //   type: actions.requestSuccess,
    //   payload
    // }),
    add: () => dispatch({ type: actions.add }),
    // edit: payload => dispatch({
    //   type: actions.edit,
    //   payload
    // }),
    // update: payload => dispatch({
    //   type: actions.update,
    //   payload
    // }),
    // remove: payload => dispatch({
    //   type: actions.remove,
    //   payload,
    // }),
  };
};

export default {};
