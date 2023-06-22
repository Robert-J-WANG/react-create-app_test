// App组件是一个外壳组件，用于囊括所以的自定义子组件

// 引入react库
import React,{Component} from 'react';
import Hello from './components/Hello/Hello'
import World from './components/World/World'


// 实际开发中，所以组件文件夹下，都使用index命名组件和css样式，这样引入的时候可以简化。
// 但是打开多个文件是，容易引起混乱
import Welcome from './components/Welcome';

// 创建一个类式组件外壳
class App extends Component {
    render(){
        return (
            <div>
               <Hello/>
               <World />
               <Welcome />
            </div>
        )
    }
}

// 暴露组件外壳
export default App;