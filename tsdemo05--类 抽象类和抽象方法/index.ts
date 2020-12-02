/*
 * @Author: your name
 * @Date: 2020-11-20 10:45:13
 * @LastEditTime: 2020-12-02 14:32:46
 * @LastEditors: zqh
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo05--类 抽象类和抽象方法\index.ts
 */
//静态修饰符
class Person {
  public name: string
  static age: number = 20 //静态属性
  constructor(name: string) {
    this.name = name
  }
  run() {
    /* 实例化以后才调用的方法 */
    console.log(`${this.name}在运动`)
  }
  work() {
    console.log(`${this.name}在工作`)
  }
  static print() {
    //静态方法
    console.log('print方法' + Person.age)
  }
}

var p = new Person('张三')
Person.print()
console.log(Person.age)

//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现（多继承）
//多态属于继承

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    //具体吃什么不知道，可以有多种实现，这个由它的子类来完成
    console.log('吃的方法')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return `${this.name}+吃粮食`
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return `${this.name}+吃老鼠`
  }
}

/* 抽象方法 */
//typescript中的抽象类，它是可以提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中其他方法可以不实现，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现，
//abstract抽象方法只能放在类里面
//抽象类和抽象方法用来定义标准（如Animal这个类要求它的子类必须包含eat方法）

abstract class Animall {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  abstract eatt(): any
}

// var a = new Animall() 错误的写法

class Dogg extends Animall {
  constructor(name: string) {
    super(name)
  }
  eatt() {
    console.log(this.name + '吃狗粮')
  }
}

var dog = new Dogg('旺财')
dog.eatt()

class Catt extends Animall {
  constructor(name: string) {
    super(name)
  }
  eatt() {
    console.log(this.name + '吃老鼠')
  }
}

var cat = new Catt('猫猫')
cat.eatt()
