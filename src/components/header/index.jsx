import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import memoryUtils from '../../utils/memoryUtils';
import menuConfig from '../../config/menuConfig'
import {formateDate} from '../../utils/dateUtils';
import './index.less';
class Header extends Component {
  state ={
    currentTime:formateDate(Date.now())
  }

  updateTime=()=>{
    //启动循环定时器，每隔1s更新一下时间状态
    setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({
        currentTime
      })
    }, 1000);
  }

  componentDidMount() {
    this.updateTime()
  }
  
  //得到当前请求对应的标题
  getTitle = ()=>{
    let title = ''
    const path = this.props.location.pathname
    menuConfig.forEach(item=>{
      if(item.key===path){
        title = item.title
      }else if(item.children){
        const cItem = item.children.find(cItem => cItem.key===path)
        if(cItem){
          title = cItem.title
        }
      }
    })
    return title
  }
  render() {
    const { currentTime } = this.state
    const user = memoryUtils.user
    //得到当前请求对应的标题
    const title = this.getTitle()

    return (
      <div className="header">
        <div className='header-top'>
          <span>欢迎😜{user.username} </span>
          <a href="javascript:;">退出</a>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>{title}</div>
          <div className='header-bottom-right'>
            <span>{currentTime}</span>
            <img src=""/>>
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)
