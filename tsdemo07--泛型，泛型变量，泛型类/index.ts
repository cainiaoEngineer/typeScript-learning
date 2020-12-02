/*
 * @Author: zqh
 * @Date: 2020-11-27 13:02:27
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-02 14:33:00
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo07--泛型，泛型变量，泛型类\index.ts
 */
/* typescript中的泛型
    1.泛型的定义
    2.泛型函数
    3.泛型类
    4.泛型接口
*/

/*
    泛型，在软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持
    未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
    在像C#和java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用。
    组件。
    通俗理解：泛型就是解决类、接口、方法的复用性、以及对不特定数据类型的支持
*/

/* 1.泛型的概念 */

/* 同时返回string类型 和number类型: any可以解决，但是放弃了类型检查，实现不了传入和返回数据类型必须一致的控制 */
function getData<T>(value: T): T {
  //说白了，此时泛型T相当于类型变量
  return value
}

getData<number>(123)

/* 2.泛型类: 比如有个最小堆算法，需要同时支持返回数字和字符串(a-z)两种类型，通过类的泛型来实现 */
/*  */
class MinClass {
  public list: number[] = []
  add(num: number) {
    this.list.push(num)
  }
  min() {
    var minNum = this.list[0]
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

var m = new MinClass()
m.add(2)
m.add(3)
m.add(4)
m.add(5)
console.log('最小数', m.min()) //但是只局限于number类型

/* 类的泛型 */
class MinnClass<T> {
  public list: T[] = []
  add(value: T): void {
    this.list.push(value)
  }
  min(): T {
    var minNum = this.list[0]
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

var m1 = new MinnClass<number>() /* 实例化类，并指定类的T类型时number */
m1.add(6)
m1.add(7)
m1.add(8)
m1.add(9)
console.log('最小数1', m1.min()) //但是只局限于number类型

var m2 = new MinnClass<string>() /* 实例化类，并指定类的T类型时string */
m2.add('a')
m2.add('b')
m2.add('c')
m2.add('d')
console.log('最小数2', m2.min()) //但是只局限于string类型
