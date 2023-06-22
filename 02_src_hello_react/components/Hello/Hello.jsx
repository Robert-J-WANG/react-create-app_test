import React,{Component} from "react";
// 引入css样式
import './Hello.css'

// 创建并暴露组件Hello
export default class Hello extends Component {
    render() {
        return(
            <div>
                <h2 className="title">Hello Hello</h2>
            </div>
        )
    }
}
