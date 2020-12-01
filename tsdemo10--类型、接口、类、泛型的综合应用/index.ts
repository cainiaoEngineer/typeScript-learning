/*
 * @Author: your name
 * @Date: 2020-11-30 16:12:23
 * @LastEditTime: 2020-12-01 10:38:40
 * @LastEditors: huangl
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

interface DBI<T>{
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

//定义一个操作mysql数据库的类
class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info)
       return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}

//定义一个操作mssql的类
class MssqlDb<T> implements DBI<T>{
    constructor() {
        console.log('数据库建立连接')
    }
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
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
        return list
    }
    
}

//操作用户表 定义一个User类和数据表做映射
class User{
    username: string | undefined;
    password: string | undefined;
}

var u = new User();
u.username = '张三2';
u.password = '123456';

var oMysql = new MysqlDb<User>();//类作为参数来约束数据传入的类型
oMysql.add(u);

var oMssql = new MssqlDb<User>();
oMssql.add(u);

//获取User表 id=4的数据
var data = oMssql.get(4);
console.log(data)

