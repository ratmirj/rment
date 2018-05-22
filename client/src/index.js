import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { movieApp } from './mainApp/redux/reducers'
import { MainApp } from './mainApp/index';

const store = createStore(movieApp);
render(
    <Provider store={store}>
        <MainApp/>
    </Provider>,
    document.getElementById('root')
);