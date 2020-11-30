"use strict";
/*
 * @Author: your name
 * @Date: 2020-11-30 16:12:23
 * @LastEditTime: 2020-11-30 17:50:38
 * @LastEditors: Please set LastEditors
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
//定义一个操作mysql数据库的类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
//定义一个操作mssql的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
        console.log('数据库建立连接');
    }
    MssqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxx12'
            },
            {
                title: 'xxx',
                desc: 'xxx12'
            }
        ];
        return list;
    };
    return MssqlDb;
}());
//操作用户表 定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三2';
u.password = '123456';
var oMysql = new MysqlDb(); //类作为参数来约束数据传入的类型
oMysql.add(u);
var oMssql = new MssqlDb();
oMssql.add(u);
//获取User表 id=4的数据
var data = oMssql.get(4);
console.log(data);
