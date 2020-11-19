

/* 1.ts中类的定义 */

// ES5
// function Person(name) {
//     this.name = name;
//     this.run = function () {
//         console.log(this.name)
//     }
// }

// var p = new Person('张三');
// p.run()

//TS中定义类
class Person {
    name: string; //属性   前面省略了public关键词
    constructor(name: string) {//构造函数   实例化类的时候触发的方法  注意：构造函数后面没有逗号
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}


var p = new Person('张三3');
// alert(p.getName());
p.setName('李四5');
console.log('p', p.getName());



/* 2.ts中实现继承 extends/super */

class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在运动`
    }

}

class Web1 extends Person1 {
    constructor(name: string) {
        super(name) //初始化。表示调用父类的构造函数
    }
}

var per1 = new Web1('王五');
console.log('per1', per1.run())

/* ts中继承的探讨：父类的方法和字类的方法一致 */
class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在运动`
    }

}

class Web2 extends Person2 {
    constructor(name: string) {
        super(name) //初始化。表示调用父类的构造函数
    }
    run(): string {
        return `${this.name}在运动-子类` //子类和父类有相同的方法，调用的是子类的方法
    }
    work() {
        console.log(`${this.name}在工作`) //扩展父类的方法
    }
}

var per2 = new Web2('李四');
console.log('per2', per2.run())


/* 3.类中的修饰符 typescript里定义属性的时候给我们提供了三种修饰符 */
/*
    public : 公有     在类里面，子类、类外面都可以访问
    protected： 保护类型   在类里面，子类里面可以访问、在类外面无法访问
    private： 私有     在类里面可以访问，子类、类外面都没法访问

    属性如果不加修饰符，默认就是公有（public）
*/
class Person3 {
    public name: string; //公有属性
    protected age: string;
    private sex: string;
    constructor(name: string, age: string, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex
    }
    nameCall(): string {
        return `我叫${this.name}`
    }
    howOld(): string {
        return `我今年${this.age}岁了`
    }
    run(): string {
        return `${this.name}在运动`
    }

}

class Web3 extends Person3 {
    constructor(name: string, age: string, sex: string) {
        super(name, age, sex) //初始化。表示调用父类的构造函数
    }
    run(): string {
        return `${this.name}在运动-子类` //子类和父类有相同的方法，调用的是子类的方法
    }
    work(): string {
        return `${this.name}在工作,今年${this.age}岁`  //扩展父类的方法
    }
    public() {
        console.log(`公共：姓名${this.age}`);
    }
    protected() {
        console.log(`保护：年纪${this.age}`);
    }
}

var per3 = new Web3('李四', '25', '男');
var per4 = new Person3('王麻子', '24', '男');
var namePublic = new Web3('李四', '25', '男').name;
// var ageProtected = new Web3('李四', '25').age;   protected在类外面无法访问

console.log('per3', per3.run())

//注意（在子类里面访问和在子类的实例里访问是两回事）

//  public : 公有     在类里面，子类、类外面都可以访问
console.log('public', per4.nameCall(), per3.run(), namePublic,)

//  protected： 保护类型   在类里面，子类里面可以访问、在类外面无法访问
console.log('protected', per4.howOld(), per3.howOld()) //此处虽然报错，但是不影响打印，ts的本质还是js，非js语法错误不会阻塞运行

//    private： 私有     在类里面可以访问，子类、类外面都没法访问
console.log('private',)
