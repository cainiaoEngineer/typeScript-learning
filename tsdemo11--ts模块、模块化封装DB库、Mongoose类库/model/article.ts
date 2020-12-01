/*
 * @Author: zqh
 * @Date: 2020-12-01 14:50:59
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 15:20:57
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo11--ts模块、模块化封装DB库、Mongoose类库\model\article.ts
 */
import { MssqlDb } from "../modules/db";

class ArticleClass{
    username: string | undefined;
    password: string | undefined;
}

 var ArticleModel = new MssqlDb<ArticleClass>();

 export{ArticleClass,ArticleModel}