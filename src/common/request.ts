import { IRequestConfig, IRequestParams } from "@/types/type";
import { getToken } from "./utils";
import axios, { AxiosInstance } from "axios";
// 小程序axios适配器
import mpAdapter from "axios-miniprogram-adapter";
import { REQUEST_CONFIG_ENUM } from "@/types/enum";
axios.defaults.adapter = mpAdapter;
// import { toast, showConfirm, tansParams } from "@/utils/common";

const { VITE_APP_API_URL } = import.meta.env; 
const REQUEST_TIME_OUT = 30000;
const successCodes = [200, 201, 204, 0];
 
//根据环境变量获取api地址
console.log("baseURL:", VITE_APP_API_URL, "++++++++++++++++++++++++");

interface IHttpRequest {

}

interface IOptions {
  
}

interface IMergeOptions extends IOptions {
  baseURL: string;
  timeout: number;
}

class HttpRequest implements IHttpRequest {
  baseURL: string;
  timeout: number;
  constructor(timeout: number) {
    this.baseURL = VITE_APP_API_URL; // 从环境变量中获取api地址
    this.timeout = timeout || REQUEST_TIME_OUT;
  }
  mergeOptions(options:IOptions): IMergeOptions {
    return {
      baseURL: VITE_APP_API_URL,
      timeout: this.timeout,
      ...options,
    };
  }
  request(options: IOptions) {
    const instance = axios.create();
    this.setInterceptors(instance);
    const opts = this.mergeOptions(options);
    return instance(opts);
  }

  get(params: IRequestParams) {
    const { url, data, headers, requestConfig } = params;
    // get参数可以直接展开
    return this.request({
      dataType: "json",
      method: "get",
      url,
      params: { ...data }, // get参数可以直接展开
      headers,
      ...requestConfig,
    });
  }
  post(params: IRequestParams) {
    const { url, data, headers, requestConfig } = params;
    // 请求体中 {}
    return this.request({
      method: "post",
      url,
      data, // post要求必须传入data属性
      headers,
      ...requestConfig,
    });
  }

  // 设置拦截器
  setInterceptors(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use((config: IRequestConfig) => {
      config.headers = {
        ...config.headers,
      };
      // 是否需要设置 token
      const isToken = config[REQUEST_CONFIG_ENUM.IS_TOKEN] || true;
      if (getToken() && isToken) {
        config.headers["Authorization"] = `Bearer ${getToken()}`;
      }
      // 是否需要显示 loading动画
      const isLoading = config[REQUEST_CONFIG_ENUM.IS_LOADING] || false;
      if (isLoading) {
        uni.showLoading({
          title: config[REQUEST_CONFIG_ENUM.LOADING_MESSAGE] || "加载中...",
        });
      }
      //console.log('config',config)
      return config;
    });
    // 响应拦截器
    instance.interceptors.response.use(
      (res) => {
        uni.hideLoading();
        let { data } = res;
        if (data) {
          if (successCodes.includes(data.code)) {
            return Promise.resolve(data);
          } else {
            // showConfirm({
            //   content: data.msg,
            //   showCancel: false,
            // }).then((res:any) => {
            //   /*               if (res.confirm) {
            //     store.dispatch("LogOut").then((res) => {
            //       uni.reLaunch({ url: "/pages/login" });
            //     });
            //   } */
            // });
            return Promise.resolve(data);
          }
        }
      },
      (err) => {
        console.log("axios报错", err);
        uni.hideLoading();
        return Promise.reject(err);
      }
    );
  }
}
 
export default new HttpRequest(REQUEST_TIME_OUT);