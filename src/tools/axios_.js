import axios from 'axios'
import {notification} from "antd";

const axios_ = (config) => {
  return new Promise((resolve, reject) => {
    axios.request({
        ...config
      })
      .then(res => {
        if (res.data.status === 40101) {
          const args = {
            message: '请求错误40101/api/',
            description: 'token令牌已过期',
            duration: 2,
          };
          notification.error(args);
          window.location.hash = '#/test';
          return false
        } else {
          resolve(res)
        }
      })
      .catch(e => {
        const args = {
          message: 'error/error',
          description: '请求错误，请稍后再试',
          duration: 2,
        };
        notification.error(args);
        reject(e)
      })
  })
};

export {axios_}