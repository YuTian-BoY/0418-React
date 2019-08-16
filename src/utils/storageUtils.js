import store from 'store'
const USER_KEY = 'user_key'
/* 
操作local数据的工具函数模块
*/

/* 
保存user
*/
/* export const saveUser = (user) => localStorage.setItem('user_key', JSON.stringify(user)) */
export const saveUser = (user) => store.set(USER_KEY, user)
/* 
读取到user
*/
/* export const getUser = () => JSON.parse(localStorage.getItem('user_key') || '{}') */
export const getUser = () => store.get(USER_KEY) || {}