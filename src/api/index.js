/* 
包含N个接口请求函数的模块
根据接口文档编写
*/
import ajax from './ajax'
/* 
登录
*/

export const reqLogin = ({username, password}) => ajax.post('/login', { username, password })

/* 
2. 添加用户
*/
// export const reqAddUser = (user) => ajax({
//     url: '/manage/user/add',
//     method: 'POST',
//     data: user
// })