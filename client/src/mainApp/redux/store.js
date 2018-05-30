import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from '../components/redux-devtools'
import  thunk from 'redux-thunk';

const enhancer = compose(

    applyMiddleware(thunk),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

export default function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(
      //     //   //sagaMiddleware
      //     //   //loggerMiddleware
      //     // )
    enhancer
  )
}
