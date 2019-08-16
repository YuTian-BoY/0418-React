import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig';
import logo from '../../assets/images/logo.png'
import './index.less';
const { SubMenu , Item } = Menu;

/* 
Admin的左侧导航组件
*/
export default class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <Link to='/home' className='left-nav-header'>
          <img src={logo} alt="logo"/>
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
        >
          <Item key="/home">
            <Link to="/home">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Item>
          <SubMenu
            key="/products"
            title={
              <span>
                <Icon type="appstore" />
                <span>商品</span>
              </span>
            }
          >
            <Item key="/category">
              <Link to="/category">
                <Icon type="bars" />
                <span>品类管理</span>
              </Link>
            </Item>
            <Item key="/product">
              <Link to="/product">
                <Icon type="tool" />
                <span>商品管理</span>
              </Link>
            </Item>
          </SubMenu>
          <Item key="/role">
            <Link to="/role">
              <Icon type="user" />
              <span>用户管理</span>
            </Link>
          </Item>
          <Item key="/user">
            <Link to="/user">
              <Icon type="safety" />
              <span>角色管理</span>
            </Link>
          </Item>
          <SubMenu
            key="/charts"
            title={
              <span>
                <Icon type="area-chart" />
                <span>图形列表</span>
              </span>
            }
          >
            <Item key="/charts/bar">
              <Link to="/charts/bar">
                <Icon type="bar-chart" />
                <span>柱状图</span>
              </Link>
            </Item>
            <Item key="/charts/line">
              <Link to="/charts/line">
                <Icon type="line-chart" />
                <span>折线图</span>
              </Link>
            </Item>
            <Item key="/charts/pie">
              <Link to="/charts/pie">
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Link>
            </Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
