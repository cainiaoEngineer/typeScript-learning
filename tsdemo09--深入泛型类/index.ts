/*
 * @Author: your name
 * @Date: 2020-11-27 13:25:17
 * @LastEditTime: 2020-12-02 14:15:37
 * @LastEditors: zqh
 * @Description: In User Settings Edit
 * @FilePath: \typescript_demo\tsdemo09--深入泛型类\index.ts
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

class User {
  username: string | undefined
  password: string | undefined
}
//操作数据库的泛型类
class MysqlDb<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    console.log(info)
    console.log(id)
    return true
  }
}

var u = new User()
u.username = '张三'
u.password = '1213'
var db = new MysqlDb<User>() //此处User泛型类对传入的数据进行类型校验
db.add(u)

/*  */
class ArticleCate {
  //定义一个文章分类的类和数据库进行映射
  title: string | undefined
  desc: string | undefined
  status: number | undefined
  constructor(params: { title: string | undefined; desc: string | undefined; status?: number | undefined }) {
    this.title = params.title
    this.desc = params.desc
    this.status = params.status
  }
}

var a = new ArticleCate({
  title: '分类',
  desc: '1111',
})

var Db = new MysqlDb<ArticleCate>()
Db.add(a)
