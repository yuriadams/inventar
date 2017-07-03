import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/items';
import ItemList from 'components/items/list';

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
