// 引入react核心库
import React from 'react';
// 引入react dom 库，用于web
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import store from './component/MyReduxDemo/redux/store'

ReactDom.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);


