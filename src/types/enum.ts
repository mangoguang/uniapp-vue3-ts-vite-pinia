export enum FIELD_TYPE {
  NUMBER = 'number',
  INPUT = 'input',
  SWITCH = 'switch',
  SELECT = 'selector',
};

/**
 * 请求配置枚举
 * @IS_TOKEN 是否携带 token
 * @IS_LOADING 是否显示 loading
 * @LOADING_MESSAGE loading 提示信息
 */
export enum REQUEST_CONFIG_ENUM {
  IS_TOKEN = 'IS_TOKEN',
  IS_LOADING = 'IS_LOADING',
  LOADING_MESSAGE = 'LOADING_MESSAGE',
}