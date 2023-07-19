

##十一： 向路由组件传递参数的3中方式

    1. params 参数
        step 1: 路由连接（携带参数）
            <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
        step 2: 注册路由（申明接收）
            <Route path="/home/message/detail/:id/:title" component={Detail} />
        step 3: 接收参数
            const { id, title } = this.props.match.params
            
    2. search 参数
        step 1: 路由连接（携带参数）
            <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
        step 2: 注册路由（无需申明，正常注册）
            <Route path="/home/message/detail" component={Detail} />
        step 3: 接收参数（需要下载'query-string'库）
            const { id, title } = QueryString.parse(this.props.location.search)
        备注：获取到的search参数是urlencoded编码字符串，需要借助'query-string'库解析
    
    3. state 参数: url地址栏不会显示携带的信息
        step 1: 路由连接（携带参数）
            <Link to={
                        {
                            pathname: '/home/message/detail',
                            state: { id: msgObj.id, title: msgObj.title }
                        }
                     }>{msgObj.title}</Link>

        step 2: 注册路由（无需申明，正常注册）
            <Route path="/home/message/detail" component={Detail} />
        step 3: 接收参数 
            const { state } = this.props.location || {}; //{}防止清空缓存时报错
            const { id, title } = state
        
##十二： 编程式路由导航 (点击button跳转，而不是使用Link或NavLink).
        原理：调用history对象里的4个api:
        
        // 以传递params参数的方式为例
        1. push() : push的方式跳转
                this.props.history.push(`/home/message/detail/${id}/${title}`)
        2. replace(): replace的方式跳转
                this.props.history.replace(`/home/message/detail/${id}/${title}`)
        3. goBack(): 后退
                this.props.history.goBack(); 
        4. goForward(): 前进
                this.props.history.goForward();
        5. go(): 前进/后退几步？
                this.props.history.go(2);   前进2步
                this.props.history.go(-2);  后退2步     

##十三： 让一般组件也能使用路由组件的history对象，使用withRouter函数实现
        原理：一般组件的props属性中没有history对象，withRouter函数加加工一般组件，让其身上生成history对象
        用法： withRouter( Header )

            class Header extends Component {
                   ...
            }
            export default withRouter(Header);