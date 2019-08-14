import React, { Component } from 'react'
import {
    Form,
    Input,
    Icon,
    Button,
    message
} from 'antd'

import { reqLogin } from '../../api';

import './login.less';
import logo from './images/logo.png'

const Item = Form.Item
/* 
登录路由组件
*/
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        // 进行表单的统一校验
        this.props.form.validateFields( async (err,values)=>{
            if(!err){
                // alert('校验成功，发送登录的ajax请求')
                // try {
                    
                // } catch (error) {
                    
                // }
                const result =  await reqLogin(values)
                if (result.status===0) {//登录请求成功
                    //得到user
                    const user = result.data
                    //保存user

                    //跳转到admin location/match/history
                    this.props.history.replace('/')
                }else{//登录请求失败
                    message.error(result.msg)
                }
            }
        })
        // const values = this.props.form.getFieldsValue()
        // const username = this.props.form.getFieldValue('username')
        // const password = this.props.form.getFieldValue('password')
        // console.log(values, username, password)
        // alert('发送登录的ajax的请求')
    }
    render() {
        const getFieldDecorator = this.props.form.getFieldDecorator
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue:'admin',//初始值
                                    rules: [
                                        { required: true,whitespace:true, message: '用户名不能为空!' },
                                        {min:4,message:'用户名不能小于4位'},
                                        {max:12,message:'用户名不能大于12位'},
                                        {pattern:/^[a-zA-Z0-9]+$/,message:'用户名必须是英文、数字或下划线组成！'
                                                }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue:'',
                                    rules: [
                                        { required: true,whitespace:true, message: '密码不能为空!' },
                                        {min:4,message:'密码不能小于4位'},
                                        {max:12,message:'密码不能大于12位'},
                                        {pattern:/^[a-zA-Z0-9]+$/,message:'密码必须是英文、数字或下划线组成！'
                                                }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedLoginForm = Form.create()(Login)

export default WrappedLoginForm

/*
实例对象：简称对象
函数对象：将函数作为对象使用
方法：是特别的属性，属性值是函数

from组件：组件中渲染了<From>

class WrappedLoginForm extends Component{

    render(){
        return <Login form={强大的对象}></Login>
    }
}
*/
/* 
用户名/密码的合法性要求
1 必须输入
2 必须大于等于4位
3 必须小于等于12位
4 必须是英文、数字、下划线组成
*/