/*
 * @Author: w444555888 w444555888@yahoo.com.tw
 * @Date: 2024-06-10 07:32:11
 * @LastEditors: w444555888 w444555888@yahoo.com.tw
 * @LastEditTime: 2024-06-10 07:39:19
 * @FilePath: \strapi\strapi\src\admin\app.example.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const config = {
  locales: [
    'ar',
    'fr',
    'cs',
    'de',
    'dk',
    'es',
    'he',
    'id',
    'it',
    'ja',
    'ko',
    'ms',
    'nl',
    'no',
    'pl',
    'pt-BR',
    'pt',
    'ru',
    'sk',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-Hans',
    'zh',
  ],
}

const bootstrap = (app) => {
  console.log(app)
}

export default {
  config,
  bootstrap,
}
