import axios from "axios";
import { Toast } from 'vant';
let urls = 'http://127.0.0.1:7100';
if(process.env.NODE_ENV == 'development'){

}else if(process.env.NODE_ENV == 'production'){
  urls = 'http://127.0.0.1:7100';
}
axios.defaults.baseURL = urls;
axios.defaults.timeout = 60000;
// 请求拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
// 响应拦截
axios.interceptors.response.use( 
  req => {
    if(req.status == 200){
      return Promise.resolve(req);
    }else{
      return Promise.reject(req);
    }
  },
  error => {
    let warn_text = '';
    console.log('requst_err',error);
    if(error.response){
      switch (error.response.status) {
        case 401: //未登录
          warn_text =  "未登录";
          break;
        case 403: //token过期
          warn_text =  "登录过期";
          break;
        case 404: //404请求不存在
          warn_text =  "网络请求不存在"
          break;
        default: 
         warn_text =  "其他错误"
      }
      return Promise.reject({ error: error.response , warn_text})
    }
  }
)
export default axios;