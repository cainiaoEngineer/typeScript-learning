"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
/*
 * @Author: zqh
 * @Date: 2020-12-01 16:24:34
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 16:25:14
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo12--命名空间\modules\a.ts
 */
var A;
(function (A) {
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
    A.Dogs = Dogs;
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
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
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
    B.Dogs = Dogs;
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
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
