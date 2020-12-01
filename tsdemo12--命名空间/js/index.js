"use strict";
/*
 * @Author: zqh
 * @Date: 2020-12-01 15:38:45
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 16:31:39
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo12--命名空间\index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* 命名空间：
     在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类、接口等放在命名空间内
     同JAVA的包，Net的命名空间一样，Typescript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
     命名空间内的对象通过export向外暴露
   命名空间和模块的区别：
     命名空间：内部模块，主要用于组织代码，避免命名冲突
     模块： ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间

   这篇幅的代码就是把命名空间封装为模块，通过export暴露，通过import导入
*/
var animal_1 = require("./modules/animal");
var d = new animal_1.A.Dogs('狼狗');
d.eat();
var c = new animal_1.B.Cat('小花');
c.eat('吃猫粮');
