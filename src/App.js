import 'api/config/firebase';
import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
/* Setup das libs */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from 'api/reducers';
import sagas from 'api/sagas';

import Toolbar from 'components/home/toolbar'
import Clients from 'components/clients'
import Inventories from 'components/inventories'
import Items from 'components/items'
import ItemShow from 'components/items/itemShow'
import Login from 'components/auth';

injectTapEventPlugin();

class App extends Component {

  componentWillMount() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = composeWithDevTools({});
    this.history = createHistory();
    const routerReduxMiddleware = routerMiddleware(this.history);
    const middlewares = [
      routerReduxMiddleware,
      sagaMiddleware,
    ];
    this.store = createStore(
      combineReducers({
        ...reducers,
        router: routerReducer
      }),
      composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(sagas);
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (payload) => {
    const action = {
      type: 'logged',
      payload,
    };
    this.store.dispatch(action);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <div className="App">
              <Toolbar history={this.history}/>
              <Route exact path="/" render={() => (<Redirect to="/clients"/>)}/>
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/clients/:id/inventories" component={Inventories} />
              <Route exact path="/inventories/:id/items" component={Items} />
              <Route exact path="/inventories/:inventory_id/items/:id" component={ItemShow} />
              <Route exact path="/login" component={Login} />
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
