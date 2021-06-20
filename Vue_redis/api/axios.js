/*
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-12-08 20:42:55
 * @LastEditTime: 2020-12-08 23:24:55
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.nosql.cn/index.php',
    headers: { 'content-type': 'application/json; charset=utf-8' }
})

export default instance;