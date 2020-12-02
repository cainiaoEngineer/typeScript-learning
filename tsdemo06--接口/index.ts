/*
 * @Author: your name
 * @Date: 2020-11-20 14:52:21
 * @LastEditTime: 2020-11-27 11:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo06--接口\index.ts
 */
/*
    1.属性接口
    2.函数接口
    3.可索引接口
    4.类类型接口
    5.接口扩展

*/
// 鸭式子类型辨型法
/*
    接口的作用，在面向对象编程中，接口是一种规范定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用，
    接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里面的方法的实现细节，它只规定这批类里
    必须提供某些方法，提供这些方法的类就可以满足实际需要。typecript中接口近似于java，同时还增加了更灵活的接口类型，包括属性、
    函数、可索引和类等
*/

function printLabel(labelInfo: { label: string }): void {
  console.log('printLabel')
}

// printLabel('哈哈哈'); //错
// printLabel({name:'hhh'});//错
printLabel({ label: 'hhh' }) //正确

/* //1.属性接口 */

//ts中自定义方法传入参数对json进行约束

interface FullName {
  firstName: string //注意：分号结束
  secondName?: string //接口的可选属性
}

function printName(name: FullName) {
  console.log(name.firstName + '--' + name.secondName)
}

// printName({ age: '20'， firstName: '张', secondName: '三' }) 错
var obj = { firstName: '张', secondName: '三' }
var obj1 = { firstName: '张' }
//推荐这种写法，将参数对象定义在外部,传入的参数必须包含属性接口的定义
printName(obj)
printName(obj1)

/* 2:函数类型接口: 对方法传入的参数 以及返回值进行约束 */

//加密的函数接口
interface encrypt {
  (key: string, value: string): string
}
var md5: encrypt = function (key: string, value: string): string {
  return key + value
}

console.log(md5('name', '张三'))

/* //3.可索引接口: 数组、对象的约束（不常用）/ */
interface UserArr {
  [index: number]: string //每个元素都是string类型
}
var arr: UserArr = ['a', 'b']

interface UserObj {
  [index: string]: string //因为对象的元素索引是字符串
}

/* //4.类类型接口（和抽象类有点类似） */
interface Animal {
  name: string
  eat(str: string): void
}

class Dogs implements Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log(this.name + '吃狗粮')
  }
}
class Cat implements Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat(food: string) {
    console.log(this.name + food)
  }
}
var d = new Dogs('小黑')
var c = new Cat('小花')
console.log(d.eat(), c.eat('吃老鼠'))

/* //5.接口扩展(继承) */
interface Animall {
  eat(): void
}

interface Person extends Animal {
  work(): void
}

class Web implements Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log(this.name + '喜欢吃馒头')
  }
  work() {
    console.log(this.name + '写代码')
  }
}

class Programmer {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  coding(code: string) {
    console.log(this.name + code)
  }
}

class Webber extends Programmer implements Person {
  constructor(name: string) {
    super(name) //派生类的构造器里必须包含super()
  }
  eat() {
    console.log(this.name + '喜欢吃馒头')
  }
  work() {
    console.log(this.name + '写ts代码')
  }
}

var w = new Web('小李')
var ww = new Webber('小华')
console.log(w.eat(), ww.work())
