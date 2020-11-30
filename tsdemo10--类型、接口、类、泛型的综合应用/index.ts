/*
 * @Author: your name
 * @Date: 2020-11-30 16:12:23
 * @LastEditTime: 2020-11-30 16:33:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo10--类型、接口、类、泛型的综合应用\index.ts
 */
/* 
    功能：定义一个操作数据库的库， 支持Mysql Mssql MongoDb
    要求1： Mysql Mssql MongoDb功能一样，都有add update delete get 方法
    注意：约束统一的规范、以及代码的重用
    解决方案：需要约束规范所以要定义接口，需要代码重用所以要用到泛型
        1: 接口： 在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
        2：泛型： 通俗理解：泛型就是解决类，接口 、方法的复用性
*/