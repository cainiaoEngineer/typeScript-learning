"use strict";
/*
 * @Author: your name
 * @Date: 2020-11-27 13:25:17
 * @LastEditTime: 2020-11-30 14:16:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo08--泛型接口，泛型类接口\index.ts
 */
var setData = function (value1, value2) {
    return value1 + value2;
};
setData('name', '张三');
var getData = function (value) {
    return value;
};
var getData1 = function (value) { return value; };
getData('123'); //在调用方法的时候规定类型
getData1(123);
var myGetData = function getDataa(value) {
    return value;
};
var myGetData1 = function (value) { return value; };
myGetData('20');
myGetData1(12);
