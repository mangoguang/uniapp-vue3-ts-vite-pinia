import request from "@/common/request";
import { REQUEST_CONFIG_ENUM } from "@/types/enum";
import { IRequestParams } from "@/types/type";

/**
 * @description 授权登录
 * @param {*} data 
 */
export function wxLogin(data:any) {
  const param:IRequestParams = {
    url: "/sys/login",
    data,
    requestConfig: {
      [REQUEST_CONFIG_ENUM.IS_LOADING]: true,
      [REQUEST_CONFIG_ENUM.LOADING_MESSAGE]: "登录中...",
    }
  }
	return request.post(param)
}