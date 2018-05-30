import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './mainApp/redux/store';
import { MainApp } from './mainApp/index';
import { ErrorBoundary } from './mainApp/components/errorBoundary';
import { DevTools } from './mainApp/components/redux-devtools';

const store = configureStore({});

render(
    <Provider store={store}>
    <ErrorBoundary>
        <MainApp/>
        {/*<DevTools/>*/}
    </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
