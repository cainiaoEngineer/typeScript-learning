"use strict";
/* 1.ts中类的定义 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三3');
// alert(p.getName());
p.setName('李四5');
console.log('p', p.getName());
/* 2.ts中实现继承 extends/super */
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person1;
}());
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this; //初始化。表示调用父类的构造函数
    }
    return Web1;
}(Person1));
var per1 = new Web1('王五');
console.log('per1', per1.run());
/* ts中继承的探讨：父类的方法和字类的方法一致 */
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name) {
        return _super.call(this, name) || this; //初始化。表示调用父类的构造函数
    }
    Web2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8-\u5B50\u7C7B"; //子类和父类有相同的方法，调用的是子类的方法
    };
    Web2.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C"); //扩展父类的方法
    };
    return Web2;
}(Person2));
var per2 = new Web2('李四');
console.log('per2', per2.run());
/* 3.类中的修饰符 typescript里定义属性的时候给我们提供了三种修饰符 */
/*
    public : 公有     在类里面，子类、类外面都可以访问
    protected： 保护类型   在类里面，子类里面可以访问、在类外面无法访问
    private： 私有     在类里面可以访问，子类、类外面都没法访问

    属性如果不加修饰符，默认就是公有（public）
*/
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    Person3.prototype.nameCall = function () {
        return "\u6211\u53EB" + this.name;
    };
    Person3.prototype.howOld = function () {
        return "\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86";
    };
    Person3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person3;
}());
var Web3 = /** @class */ (function (_super) {
    __extends(Web3, _super);
    function Web3(name, age) {
        return _super.call(this, name, age) || this; //初始化。表示调用父类的构造函数
    }
    Web3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8-\u5B50\u7C7B"; //子类和父类有相同的方法，调用的是子类的方法
    };
    Web3.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C,\u4ECA\u5E74" + this.age + "\u5C81"; //扩展父类的方法
    };
    return Web3;
}(Person3));
var per3 = new Web3('李四', '25');
console.log('per3', per3.run());
//注意（在子类里面访问和在子类的实例里访问是两回事）
//  public : 公有     在类里面，子类、类外面都可以访问
var per4 = new Person3('王麻子', '24');
console.log('public', per4.nameCall(), per3.run(), per4.name);
//  protected： 保护类型   在类里面，子类里面可以访问、在类外面无法访问
console.log('protected', per4.howOld(), per3.howOld(), per4.age); //此处虽然报错，但是不影响打印，ts的本质还是js，非js语法错误不会阻塞运行
