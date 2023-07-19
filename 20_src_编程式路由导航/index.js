// js入口，引入react库和组件的入口

//引入react核心库
import React from 'react';
// 引入reactDOM库
import ReactDOM from 'react-dom/client';
// 引入组件
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// //react17 渲染组件到页面
// ReactDOM.render(<App/>,document.getElementById('root') )

// react18 渲染写法
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)