/*
封装axios
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
用来发ajax请求的函数模块
1 将 post请求的data对象数据转换为urlencode格式的字符串数据 ==> 请求拦截器 (后台接口不能处理json格式请求参数)
2 请求成功得到的不是response，而是response.data
包装的就是axios ==> 向外暴露本质就是axios
3 统一处理请求异常，外部调用者不用再处理请求异常
*/
import axios from "axios"
import {message} from 'antd'
const qs = require('qs')


// 使用请求拦截器
axios.interceptors.request.use(config=>{
    // 1 将 post请求的data对象数据转换为 urlencode 格式的字符串数据
    if (config.method.toUpperCase()==='POST'&& config.data instanceof Object){
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = qs.stringify(config.data)
    }
    return config
})
// 使用响应拦截器
axios.interceptors.response.use(
    response => {
        // 2 请求成功得到的不是response，而是response.data
        return response.data
    },
    // 3 统一处理请求异常，外部调用者不用再处理请求异常
    error => {//ajax请求异常
        message.error('请求失败:'+ error.message)
        //返回一个pending状态的promise ==> 中断promise链
        return new Promise(()=>{})
    }
)
/* axios.post('/login',{username:'admin',password:'admin'})
    .then(
        result => {//result是响应体数据，而不是响应对象
            
        },
        error=>{
            alert('请求失败:'+ error.message)
        }
    ) */
// axios.post('/login','username=admin&password=admin')
// axios.post('/product/add',{name:'xxx',categoryId: 2,price:12})

export default axios
