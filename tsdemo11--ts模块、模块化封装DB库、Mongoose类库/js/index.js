"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./model/user");
var article_1 = require("./model/article");
//增加数据
var u = new user_1.UserClass();
u.password = "张三";
u.username = "1234565555";
user_1.UserModel.add(u);
//获取user表数据
var result = user_1.UserModel.get(123);
console.log(result);
//获取文章表的数据
var res = article_1.ArticleModel.get(1);
console.log(res);
