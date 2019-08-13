import React, { Component } from 'react'
import {
    Form,
    Input,
    Icon,
    Button,
} from 'antd'

import './login.less';
import logo from './images/logo.png'
/* 
登录路由组件
*/
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <div>From</div>
                </div>
            </div>
        )
    }
}
