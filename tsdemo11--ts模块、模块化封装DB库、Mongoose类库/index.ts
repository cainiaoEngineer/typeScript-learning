/*
 * @Author: zqh
 * @Date: 2020-11-30 17:52:27
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-02 14:33:33
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo11--ts模块、模块化封装DB库、Mongoose类库\index.ts
 */
import { UserClass, UserModel } from './model/user'
import { ArticleClass, ArticleModel } from './model/article'

//增加数据
var u = new UserClass()
u.password = '张三'
u.username = '1234565555'
UserModel.add(u)

//获取user表数据
var result = UserModel.get(123)
console.log(result)

//获取文章表的数据
var res = ArticleModel.get(1)
console.log(res)
