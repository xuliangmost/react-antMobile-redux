import React from 'react'
import App from './routes'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

import {BrowserRouter as Router} from 'react-router-dom'

function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
const Page = () => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);
export default Page