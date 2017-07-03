import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/inventories';
import InventoryList from 'components/inventories/list';

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);
