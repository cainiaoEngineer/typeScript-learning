/*
 * @Author: zqh
 * @Date: 2020-12-01 16:24:34
 * @LastEditors: zqh
 * @LastEditTime: 2020-12-01 16:25:14
 * @Description: file content
 * @FilePath: \typescript_demo\tsdemo12--命名空间\modules\a.ts
 */
namespace A{
    interface Animal {
      name: string;
      eat(str: string): void;
    }

   export class Dogs implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        };
        eat() {
            console.log(this.name + '吃狗粮')
        }
    }
   export class Cat implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        };
        eat(food: string) {
            console.log(this.name + food)
        }
    }
}
 
namespace B{
      interface Animal {
        name: string;
        eat(str: string): void;
      }

   export class Dogs implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        };
        eat() {
            console.log(this.name + '吃狗粮')
        }
    }
   export class Cat implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        };
        eat(food: string) {
            console.log(this.name + food)
        }
    }
}

export {A,B}