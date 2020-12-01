"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MssqlDb = exports.MysqlDb = void 0;
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
exports.MysqlDb = MysqlDb;
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
exports.MssqlDb = MssqlDb;
