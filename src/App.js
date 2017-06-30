import 'babel-polyfill';
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

import Clients from 'components/clients'

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

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <div className="App">
              <Route exact path="/" render={() => (<Redirect to="/clients"/>)}/>
              <Route exact path="/clients" component={Clients} />
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
