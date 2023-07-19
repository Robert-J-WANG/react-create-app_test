// 引入react核心库
import React from 'react';
// 引入react dom 库，用于web
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDom.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
