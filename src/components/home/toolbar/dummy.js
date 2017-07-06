import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';

const ToolbarMenu = ({ logout }, props) => (
  // só aparece se o usuario estiver logado, senao aparece nada ou btn login
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMoreVert color={white} /></IconButton>
    }>
    <MenuItem primaryText="Sair" />
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

  return (location.pathname === '/clients') ? null : backMenu
}

const Toolbar = ({ location, history }) => (
  <AppBar
    title={<span>Inventar</span>}
    iconElementLeft={<BackItem
      location={location}
      history={history}
    />}
    iconElementRight={<ToolbarMenu />}
  />
);

export default Toolbar;
