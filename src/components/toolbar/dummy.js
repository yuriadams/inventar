import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';

const Logged = ({ logout }, props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
    <MenuItem primaryText="Refresh" />
    {/* <MenuItem onClick={logout} primaryText="Sign out" /> */}
  </IconMenu>
);

const Toolbar = ({ }) => (
  <AppBar
    title={<span>Inventar</span>}
    // iconElementLeft={<Logged logout={logout}/>}
    // iconElementRight={
    //   <FontIcon className="material-icons"
    //   >notifications</FontIcon>
    // }
  />
);

Toolbar.propTypes = {
  // logout: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
}

export default Toolbar;
