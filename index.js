/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import newsReducer from './src/redux/states/newsState';
import newsSaga from './src/redux/sagas/newsSaga';

// initialize saga
const saga = createSagaMiddleware()

// initialize redux-toolkit store
const store = configureStore({
  reducer: {
    newsReducer: newsReducer
  },
  middleware: [saga]
})

saga.run(newsSaga)

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
