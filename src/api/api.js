import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: 'http://47.95.234.100:8082',
  headers:
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  transformRequest: [function (data, headers)
  {
    return qs.stringify({
      ...data,
    })
  }]
})

instance.interceptors.response.use(
  response => {
    console.log(response.data.code);
    if (response.data.code===0) {
      return response.data
    }else{
      alert(response.data.msg)
    }
  })
// instance.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   if(response.data.code !== 0){
//     console.log(response.data)
//   }
//   else{
//     return response.data
//   }
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
//登录信息

//发送验证码
export const sendCode = params => {
  return instance.post('/api/app/user/send_code',params)
}
//注册
export const signin = params => {
  return instance.post('/api/app/user/signin',params)
}
//验证码登录
export const codeLogin = params => {
  return instance.post('/api/app/user/codelogin',params)
}
//密码登录
export const passwordLogin = params => {
  return instance.post('/api/app/user/pwlogin',params)
}
//更改登录密码
export const changeLoginPassword = params => {
  return instance.post('/api/app/user/m_login_pwd',params)
}
//忘记登录密码
export const forgetLoginPassword = params => {
  return instance.post('/api/app/user/forget_login_pwd',params)
}
//设置新密码
export const setNewPassword = params => {
  return instance.post('/api/app/user/set_new_pwd',params)
}
//获取用户基本信息
export const getUserInfo = params => {
  return instance.post('/api/app/user/info',params)
}
//退出
export const loginOut = params => {
  return instance.post('/api/app/user/info',params)
}
//实名认证
export const applyName = params => {
  return instance.post('/api/auth/apply',params)
}
//得到实名认证信息地址
export const authInfo = params => {
  return instance.post('/api/user/auth/authInfo',params)
}

