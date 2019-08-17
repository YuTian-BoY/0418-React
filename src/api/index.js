/* 
包含N个接口请求函数的模块
根据接口文档编写
*/
import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd';
/* 
登录
*/

export const reqLogin = ({
  username,
  password
}) => ajax.post('/login', {
  username,
  password
})

/* 
2. 添加用户
*/
export const reqAddUser = (user) => ajax({
  url: '/manage/user/add',
  method: 'POST',
  data: user
})

/* 
获取天气信息(jsonp)
*/
export const reqWeather = (city) => {
  const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
  return new Promise((resolve, reject) => { //执行器函数
    jsonp(url, {}, (err, data) => {
      if (!err && data.error === 0) {
        const {dayPictureUrl,weather} = data.results[0]. weather_data[0]
        resolve({
          dayPictureUrl,
          weather
        })
      } else {
        // reject()
        message.error('获取天气信息失败')
      }
    })
  })

}