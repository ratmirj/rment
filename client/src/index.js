import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './mainApp/redux/store';
import { MainApp } from './mainApp/index';
import { ErrorBoundary } from './mainApp/components/errorBoundary';

const store = configureStore({});

render(
    <Provider store={store}>
    <ErrorBoundary>
        <MainApp/>
    </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
