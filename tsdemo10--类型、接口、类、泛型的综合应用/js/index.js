"use strict";
/*
 * @Author: your name
 * @Date: 2020-11-27 13:25:17
 * @LastEditTime: 2020-11-30 16:09:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo08--泛型接口，泛型类接口\index.ts
 */
/* typescript中的泛型
    1.泛型的定义
    2.泛型函数
    3.泛型类
    4.泛型接口
*/
/*
泛型类：可以把类当作参数的泛型类
*/
// class User{
//     username: string |undefined; //因为没有在构造函数中赋值，所以加一个undefined类型容错
//     password: string | undefined;
// }
// class MysqlDb{
//     add(user: User): boolean{
//         console.log(user)
//         return true
//     }
// }
// var u = new User();
// u.username = "张三"
// u.password = '1213'
// var db = new MysqlDb()
// db.add(u)
//以上改造如下：操作数据库的泛型类
//User类作用是映射数据库字段
//MysqlDb类用于操作数据库
//然后把User类作为参数传入MysqlDb中
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
//操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = "张三";
u.password = '1213';
var db = new MysqlDb(); //此处User泛型类对传入的数据进行类型校验
db.add(u);
/*  */
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var a = new ArticleCate({
    title: '分类',
    desc: '1111'
});
var Db = new MysqlDb();
Db.add(a);
