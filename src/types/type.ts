import { AxiosRequestConfig } from 'axios';
import { REQUEST_CONFIG_ENUM } from './enum';

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * 请求配置
 * @IS_TOKEN  是否需要携带token
 * @IS_LOADING 是否需要loading动画
 * @LOADING_MESSAGE loading提示信息
 */
export interface IRequestConfig extends AxiosRequestConfig<any> {
  [REQUEST_CONFIG_ENUM.IS_TOKEN]?: boolean;
  [REQUEST_CONFIG_ENUM.IS_LOADING]?: boolean;
  [REQUEST_CONFIG_ENUM.LOADING_MESSAGE]: string;
}

/**
 * 请求参数
 * @param url 请求地址
 * @param data 请求参数
 * @param headers 请求头
 * @param requestConfig 请求配置
 */
export interface IRequestParams {
  url: string;
  data?: any;
  headers?: any;
  requestConfig?: IRequestConfig;
}
