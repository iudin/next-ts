const buildType = process.env.BUILD_TYPE || 'dev'; // dev | test
const protocol = `http${process.env.HTTPS === 'true' ? 's' : ''}://`;
export const initialPath = process.env.INITIAL_PATH || '';
export const API_URL = `${protocol}kari-${buildType}.lad24.ru`;
export const API_ECOMMERCE = `${API_URL}/ecommerce`;
export const API_CLOUD = `${API_URL}/cloud`;
export const API_DISCOUNTS = `${API_URL}/discounts`;
export const API_PAGES = `${API_URL}/pages`;

export enum RequestState {
  REQUEST = '_REQUEST',
  SUCCESS = '_SUCCESS',
  FAIL = '_FAIL'
}
export enum RequestType {
  GET = '_GET_REQUEST',
  POST = '_POST_REQUEST',
  PUT = '_PUT_REQUEST',
  DELETE = '_DELETE_REQUEST'
}

export const bonusesPercentage = 0.1;
export const creditPercentage = 0.1;
export const defaultDeliveryStoresQuantity = 5;

export const socialAppIdVk = process.env.SOCIAL_APP_ID_VK;
export const socialAppIdOk = process.env.SOCIAL_APP_ID_OK;
export const socialAppIdFb = process.env.SOCIAL_APP_ID_FB;

export const msgShowTime = 14000;
export const delAnimTime = 1000;

export const itemsPageSize = 20;

export const siteTitle = process.env.SITE_TITLE;
export const staticTitle = ' | kari';
export const categoryTitle = ' – купить в интернет-магазине Kari';
