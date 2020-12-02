"use strict";
/*
 * @Author: zqh
 * @Date: 2020-12-01 16:35:38
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-02 15:29:44
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo13--装饰器\index.ts
 */
/*
  装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
  注意：通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
  常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
  装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
  装饰器是js过去几年最大的成就之一，已是Es7的标准特性之一
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* 1.类装饰器：在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数 */
//普通装饰器
function logClass(params) {
    // 注意：这里必须加any类型，表示class是any类型
    console.log(params); //表示调用装饰器
    //params就是当前类
    params.prototype.apiUrl = '在装饰器里动态扩展的属性';
    params.prototype.run = function () {
        console.log('我是一个run方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
/* 1.2 类装饰器：装饰器工厂（可传参） */
function logClass1(params) {
    return function (target) {
        console.log(target, params);
        target.prototype.apiUrl = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () { };
    HttpClient1 = __decorate([
        logClass1('www.baidu.com')
    ], HttpClient1);
    return HttpClient1;
}());
var h = new HttpClient1();
console.log(h.apiUrl);
/* 1.3 类装饰器
  下面是一个重载构造函数的例子，类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
  */
