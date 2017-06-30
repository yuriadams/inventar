import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/clients';
import ClientList from 'components/clients/list';

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
