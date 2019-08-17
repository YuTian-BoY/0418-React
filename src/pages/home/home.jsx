import React, { Component } from 'react'
import  './home.less';
/* 
Admin的首页子路由
*/
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h2 className='home-content'>
        欢迎使用硅谷后台管理系统
        </h2>
      </div>
    )
  }
}
