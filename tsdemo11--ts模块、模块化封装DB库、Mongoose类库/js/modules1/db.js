"use strict";
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
