"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
/*
 * @Author: zqh
 * @Date: 2020-12-01 14:51:13
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 15:19:33
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo11--ts模块、模块化封装DB库、Mongoose类库\model\user.ts
 */
var db_1 = require("../modules/db");
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MssqlDb();
exports.UserModel = UserModel;
