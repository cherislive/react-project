/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = '';
let baseName = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '';
} else {
  baseURL = '';
  baseName = process.env.PUBLIC_PATCH || '';
}
export { imgUrl, baseURL, baseName };