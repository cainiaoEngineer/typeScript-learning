/*
 * @Author: your name
 * @Date: 2020-09-02 14:05:40
 * @LastEditTime: 2020-11-10 10:44:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tsdemo02\index.ts
 */
// 布尔类型（boolean）true false
let flag: boolean = true
flag = false

//数字类型
let a: number = 123
console.log(a, "number0")
a = 12.3
console.log(a, "number1")
/* 错误写法a='string' */

//字符串类型（string）
let str: string = "this is ts"
//str=123 //错误写法

//数组类型（array）ts中定义数组有两种方式
//1.第一中方式
let arr: number[] = [1, 2, 3]
let arr1: string[] = ["1", "2", "3"]
//2.第二种方式
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<string> = ["1", "2"]
//3.第三种方式
var arr31: any[] = ['11', 22, true];
console.log(arr31)

//元组类型(tuple) 是数组的一种，可以指定数组中每个元素的类型
let arr4: [string, number, boolean] = ["1", 2, false]

//枚举类型（enum）
// enum 枚举名{
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     标识符[= 整型常数],
//     ...
//     标识符[=整型常数],
// }
enum Flag {
  success = 1,
  error = -1,
}
let f: Flag = Flag.success
console.log(f, "enum0")
enum Color { //默认赋值为索引值,且会在已赋值往后加1
  red,
  blue = 5,
  orange,
}
let c: Color = Color.orange
console.log(c, "enum1")

//任意类型（any）
//作用：比如获取dom节点，用any类型定义（因为ts没有Object基本类型）
let num: any = 123
num = "123"

//null和undefined 其他数据类型（never）的子类型
//定义没有赋值就是undefined
let num1: number
// console.log(num1) //报错，输出undefined
let num2: undefined
// console.log(num2) //正确，输出undefined
let num3: number | undefined //( | 表示或)
num3 = 123
// console.log(num3) //

//一个元素可能是number类型可能是null,可能是undefined,可以设置多个类型
var num4: number | null | undefined;
num = 1234;

/* void类型： ts中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值 */

function run(): void {
  console.log('run')
}

// function run1(): number { //错误写法
//   console.log('run')
// }
// function run1(): number { //正确写法
//   return 123
// }

/* never类型是其他类型（包括null 和undefined)的子类型。代表从不会出现的值 */
//这意味着声明never的变量只能被never类型所赋值
var a1: undefined;
a1 = undefined;

// var a2: never;
// a2=123 //错误的写法


