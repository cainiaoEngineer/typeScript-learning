/*
 * @Author: your name
 * @Date: 2020-11-27 13:25:17
 * @LastEditTime: 2020-11-30 14:16:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo08--泛型接口，泛型类接口\index.ts
 */

/* typescript中的泛型
    1.泛型的定义
    2.泛型函数
    3.泛型类
    4.泛型接口
*/

/*
    函数类型接口: 对方法传入的参数 以及返回值进行约束
*/
interface ConfigFn0 {
    (value1: string, value2: string): string;
}

var setData: ConfigFn0 = function (value1: string, value2: string): string {
    return value1 + value2;
}

setData('name', '张三');


/* 
    泛型接口
*/
//第一种定义方法(在调用方法的时候规定类型)
interface ConfigFn {
    <T>(value: T): T;
}


var getData: ConfigFn = function <T>(value: T): T { //实现泛型接口
    return value;
}

let getData1: ConfigFn = <T>(value: T): T => value


getData<string>('123') //在调用方法的时候规定类型
getData1<number>(123)

//第二种方法(在定义方法时规定类型) 
interface ConfigFnn<T> {
    (value: T): T;
}

var myGetData: ConfigFnn<string> = function getDataa<T>(value: T): T { //在定义方法时规定类型
    return value;
}

let myGetData1: ConfigFnn<number> = <T>(value: T): T => value

myGetData('20');
myGetData1(12);