"use strict";
/*
 * @Author: your name
 * @Date: 2020-09-02 14:05:40
 * @LastEditTime: 2020-11-10 10:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tsdemo02\index.ts
 */
// 布尔类型（boolean）true false
var flag = true;
flag = false;
//数字类型
var a = 123;
console.log(a, "number0");
a = 12.3;
console.log(a, "number1");
/* 错误写法a='string' */
//字符串类型（string）
var str = "this is ts";
//str=123 //错误写法
//数组类型（array）ts中定义数组有两种方式
//1.第一中方式
var arr = [1, 2, 3];
var arr1 = ["1", "2", "3"];
//2.第二种方式
var arr2 = [1, 2, 3];
var arr3 = ["1", "2"];
//3.第三种方式
var arr31 = ['11', 22, true];
console.log(arr31);
//元组类型(tuple) 是数组的一种，可以指定数组中每个元素的类型
var arr4 = ["1", 2, false];
//枚举类型（enum）
// enum 枚举名{
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     ...
//     标识符[=整型常数],
// }
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f, "enum0");
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
var c = Color.orange;
console.log(c, "enum1");
//任意类型（any）
//作用：比如获取dom节点，用any类型定义（因为ts没有Object基本类型）
var num = 123;
num = "123";
//null和undefined 其他数据类型（never）的子类型
//定义没有赋值就是undefined
var num1;
// console.log(num1) //报错，输出undefined
var num2;
// console.log(num2) //正确，输出undefined
var num3; //( | 表示或)
num3 = 123;
// console.log(num3) //
//一个元素可能是number类型可能是null,可能是undefined,可以设置多个类型
var num4;
num = 1234;
/* void类型： ts中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值 */
function run() {
    console.log('run');
}
// function run1(): number { //错误写法
//   console.log('run')
// }
// function run1(): number { //正确写法
//   return 123
// }
/* never类型是其他类型（包括null 和undefined)的子类型。代表从不会出现的值 */
//这意味着声明never的变量只能被never类型所赋值
var a1;
a1 = undefined;
// var a2: never;
// a2=123 //错误的写法
