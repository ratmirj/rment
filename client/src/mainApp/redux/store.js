import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      //sagaMiddleware
      //loggerMiddleware
    )
  )
}

//sagaMiddleware.run(rootSaga)
