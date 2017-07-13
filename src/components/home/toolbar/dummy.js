import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';

const ToolbarMenu = ({ logout, user }, props) => (
  (Object.keys(user).length === 0 && user.constructor === Object) ?
  null :
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMoreVert color={white} /></IconButton>
    }>
    <MenuItem
      primaryText="Sair"
      onTouchTap={logout}
    />
  </IconMenu>
);

const BackItem = ({ location, history }) => {
  const onNavigateBack = () => {
    history.goBack();
  };

  const backMenu = (
    <IconButton onTouchTap={onNavigateBack}>
      <NavigationChevronLeft color={white} />
    </IconButton>
  );

  return (location.pathname === '/clients' || location.pathname === '/login') ? null : backMenu
}

const Toolbar = ({ location, history, logout, user }) => (
  <AppBar
    title={<span>Inventar</span>}
    iconElementLeft={<BackItem
      location={location}
      history={history}
    />}
    iconElementRight={<ToolbarMenu logout={logout} user={user}/>}
  />
);

export default Toolbar;
