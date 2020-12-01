"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.ArticleClass = void 0;
/*
 * @Author: zqh
 * @Date: 2020-12-01 14:50:59
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 15:20:57
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo11--ts模块、模块化封装DB库、Mongoose类库\model\article.ts
 */
var db_1 = require("../modules/db");
var ArticleClass = /** @class */ (function () {
    function ArticleClass() {
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
var ArticleModel = new db_1.MssqlDb();
exports.ArticleModel = ArticleModel;
