"use strict";
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
/*
 * @Author: your name
 * @Date: 2020-11-20 10:45:13
 * @LastEditTime: 2020-11-20 14:30:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo05--类 的静态属性\index.ts
 */
//静态修饰符
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    Person.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    Person.print = function () {
        console.log('print方法' + Person.age);
    };
    Person.age = 20; //静态属性
    return Person;
}());
var p = new Person('张三');
Person.print();
console.log(Person.age);
//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现（多继承）
//多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "+\u5403\u7CAE\u98DF";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "+\u5403\u8001\u9F20";
    };
    return Cat;
}(Animal));
/* 抽象方法 */
//typescript中的抽象类，它是可以提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中其他方法可以不实现，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现，
//abstract抽象方法只能放在类里面
//抽象类和抽象方法用来定义标准（如Animal这个类要求它的子类必须包含eat方法）
var Animall = /** @class */ (function () {
    function Animall(name) {
        this.name = name;
    }
    return Animall;
}());
// var a = new Animall() 错误的写法
var Dogg = /** @class */ (function (_super) {
    __extends(Dogg, _super);
    function Dogg(name) {
        return _super.call(this, name) || this;
    }
    Dogg.prototype.eatt = function () {
        console.log(this.name + '吃狗粮');
    };
    return Dogg;
}(Animall));
var dog = new Dogg('旺财');
dog.eatt();
var Catt = /** @class */ (function (_super) {
    __extends(Catt, _super);
    function Catt(name) {
        return _super.call(this, name) || this;
    }
    Catt.prototype.eatt = function () {
        console.log(this.name + '吃老鼠');
    };
    return Catt;
}(Animall));
var cat = new Catt('猫猫');
cat.eatt();
