import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { Provider } from "react-redux";
import rootReducer from "./Modules/reducers";
import rootSaga from "./Modules/sagas";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import './index.scss'
import HeadComponent from "./Components/HeadComponent";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
    // ,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__
    //   ? composeWithDevTools()
    //   : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HeadComponent/>
    <div className='router-wrap'>
      <Routes />
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
