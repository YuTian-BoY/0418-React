import React, { Component } from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import memoryUtils from '../../utils/memoryUtils'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
const { Footer, Sider, Content } = Layout;

// 后台管理组件
export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        //如果当前用户没有登录 自动跳转到login
        if (!user._id) {
            //在render()中自动跳转
            return <Redirect to="/login" />
            //在事件回调函数中自动跳转：history.push()
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:30, background:'white'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Redirect to='/home' />

                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#aaa'}}>推荐使用谷歌浏览器，以获得更好的用户体验</Footer>
                </Layout>
            </Layout>
        )
    }
}