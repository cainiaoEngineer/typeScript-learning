/*
 * @Author: your name
 * @Date: 2020-11-10 10:47:42
 * @LastEditTime: 2020-11-10 15:09:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo03--函数\index.ts
 */

/* ts中函数的定义 */

/* 函数声明法 */
function run(): string {
  return 'run'
}
/* 函数表达式法 */
var func = function (): number {
  return 123;
}

/* ts中定义方法传参 */
function getInfo(name: string, age: number): string {
  return `${name}--${age}`
}

var getInfo1 = function (name: string, age: number): string {
  return `${name}--${age}`
}
console.log('getInfo', (getInfo('zu', 22)))

//没有返回值
function run1(): void {
  console.log(123)
}
/* 
方法的可选参数 （注意：可选参数必须配置到参数列表的最后面）*/
/* es5中方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数 */
function getInfo2(age: number, name?: string): string {
  return `${name}--${age}`
}

console.log('getInfo2', 123)

/* 默认参数 */
function getInfo3(age: number, name: string = 'bob'): string {
  return `${name}--${age}`
}
console.log('getInfo3', getInfo3(22))

/* 剩余参数 */
//三点运算符，接收形参传过来的值
function sum(...result: number[]): number {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i]
  }
  return sum
}

//写法二
function sum1(a: number, ...result: number[]): number {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i]
  }
  return sum
}

console.log('sum', sum(2, 1, 2, 3, 4, 5, 6))



/* 函数的重载 */
//ts为了兼容es5和es6 ，重载的写法和java有所区别, 重载只能写一种实现
function getInfo4(name: string): string;

function getInfo4(name: string, age: number): string;

// function getInfo4(str: any): any {
//   if (typeof str == 'string') {
//     return '我叫' + str
//   } else {
//     return '年龄是' + str
//   }
// }

function getInfo4(name: any, age?: any): any {
  if (age) {
    return '我叫' + age + ',我的年龄是' + age
  } else {
    return '我叫' + name
  }
}

console.log(getInfo4('张三')); //正确写法
// console.log(getInfo4(22)); //错误写法
console.log(getInfo4('张三', 22))
// console.log(getInfo4(true)) //错误写法


/* 箭头函数 */

setTimeout(() => { //箭头函数里的this指向上下文
  alert('run')
}, 1000)

