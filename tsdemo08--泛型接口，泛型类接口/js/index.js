"use strict";
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
function printLabel(labelInfo) {
    console.log('printLabel');
}
// printLabel('哈哈哈'); //错
// printLabel({name:'hhh'});//错
printLabel({ label: 'hhh' }); //正确
function printName(name) {
    console.log(name.firstName + '--' + name.secondName);
}
// printName({ age: '20'， firstName: '张', secondName: '三' }) 错
var obj = { firstName: '张', secondName: '三' };
var obj1 = { firstName: '张' };
//推荐这种写法，将参数对象定义在外部,传入的参数必须包含属性接口的定义
printName(obj);
printName(obj1);
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', '张三'));
var arr = ['a', 'b'];
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    ;
    Dogs.prototype.eat = function () {
        console.log(this.name + '吃狗粮');
    };
    return Dogs;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    ;
    Cat.prototype.eat = function (food) {
        console.log(this.name + food);
    };
    return Cat;
}());
var d = new Dogs('小黑');
var c = new Cat('小花');
console.log(d.eat(), c.eat('吃老鼠'));
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web.prototype.work = function () {
        console.log(this.name + '写代码');
    };
    return Web;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Webber = /** @class */ (function (_super) {
    __extends(Webber, _super);
    function Webber(name) {
        return _super.call(this, name) || this; //派生类的构造器里必须包含super()
    }
    Webber.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Webber.prototype.work = function () {
        console.log(this.name + '写ts代码');
    };
    return Webber;
}(Programmer));
var w = new Web('小李');
var ww = new Webber('小华');
console.log(w.eat(), ww.work());
