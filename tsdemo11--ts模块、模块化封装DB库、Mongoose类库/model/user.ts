/*
 * @Author: zqh
 * @Date: 2020-12-01 14:51:13
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 15:19:33
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo11--ts模块、模块化封装DB库、Mongoose类库\model\user.ts
 */
import { MssqlDb } from "../modules/db";

class UserClass{
    username: string | undefined;
    password: string | undefined;
}

 var UserModel = new MssqlDb<UserClass>();

 export{UserClass,UserModel}
