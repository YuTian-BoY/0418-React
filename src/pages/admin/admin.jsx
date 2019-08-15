import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import memoryUtils from '../../utils/memoryUtils'
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
                    <LeftNav/>>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:30, background:'white'}}>Content</Content>
                    <Footer style={{textAlign:'center',color:'#aaa'}}>推荐使用谷歌浏览器，以获得更好的用户体验</Footer>
                </Layout>
            </Layout>
        )
    }
}