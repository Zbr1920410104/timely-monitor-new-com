import { ENVIRONMENT } from './app-constants';
import { SAP_CONTROL } from '../config/app-config';

/** 域名 */
const _DOMAIN = {
  [ENVIRONMENT.DEV]: 'http://localhost:4400',
  [ENVIRONMENT.TEST]: 'http://localhost:4400',
  [ENVIRONMENT.PRO]: 'http://39.97.175.30:4400',
};

export const DOMAIN = _DOMAIN[SAP_CONTROL];

// 模块
export const PART = {
  OPT_USER: '/user',
  OPT_ADMIN: '/admin',
  OPT_MONITOR: '/monitor',
  OPT_CONSUMER: '/consumer',
};

// 返回码
export const RESPONSE_CODE = {
  success: 200,
  created: 201,
  noContent: 204,
  error: 400,
  unauthorized: 401,
  serviceError: 500,
};
