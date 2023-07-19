import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Header extends Component {

    back = () => {
        this.props.history.goBack();
    }
    forward = () => {
        this.props.history.goForward();
    }
    go = () => {
        this.props.history.go(2);
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button className='btn-primary' onClick={this.back}>后退</button> &nbsp;&nbsp;
                <button className='btn-success' onClick={this.forward}>前进</button>&nbsp;&nbsp;
                <button className='btn-danger' onClick={this.go}>GO</button>
            </div>

        )
    }
}

export default withRouter(Header);
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新的组件