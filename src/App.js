import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store'
import {Link} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    withRouter
} from 'react-router-dom';
import Home from './component/message/message';
import page from './component/page/page';
import Clock from './component/page/clock';

import { Layout, Menu,Breadcrumb } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { setPageTab,setDefaultSelectKeys } from './store/actions'
const { Header, Content, Sider} = Layout;

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: false,
    };


    componentWillMount() {
        var current = store.getState().routesAll.find((item, index) => {
            return item.route == this.props.location.pathname
        })
        store.dispatch(setPageTab([current]))
        store.dispatch(setDefaultSelectKeys(String(current.id) ))
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        // 判断跳转路由不等于当前路由
        if (nextProps.location.pathname !== this.props.location.pathname) {
            var current = store.getState().routesAll.find((item, index) => {
                return item.route == nextProps.location.pathname
            })
            store.dispatch(setPageTab([{name:current.name,route:current.route.pathname,id:1}]))
        }
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        return(
            <Provider store={store}>

                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={[store.getState().defaultSelectedKeys]}>
                                <Menu.Item key="1" icon={<UserOutlined />}>
                                    <Link to='/'  key="1">首页</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<UserOutlined />}>
                                    <Link to='/page'  key="2">第一页</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                                    <Link to='/clock'  key="3">第二页</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            <Header className="site-layout-background" style={{ padding: 0 }}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                })}

                                <Breadcrumb separator=">"   >
                                    {
                                        store.getState().pageTab.map((item, index) => {
                                            return  <Breadcrumb.Item key={index}  href={item.route}>{item.name}</Breadcrumb.Item>
                                        })
                                    }
                                </Breadcrumb>
                            </Header>
                            <Content
                                className="site-layout-background"
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact path="/" name='首页' component={Home} />
                                <Route exact path="/page"   name='page页' component={page} />
                                <Route exact path="/clock"  name='clock页' component={Clock} />
                            </Content>
                        </Layout>
                    </Layout>


            </Provider>
        )
    };

}




export default withRouter(App)
