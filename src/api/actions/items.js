import actions from 'api/config/actions'

export const mapStateToProps = ({ items }) => ({ items });

export const mapDispatchToProps = (dispatch) => {
  return {
    insertManually: () => dispatch({ type: actions.insertManually }),
    insertBarCode: () => dispatch({ type: actions.insertBarCode }),
  };
};

export default {};
