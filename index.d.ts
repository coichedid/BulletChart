// declare module "Bullet" {
//     module Bullet {
//         interface BulletFactory {
//             width(x?:number):any;
//             height(y?:number):any;
//             orient(o?:string):any;
//             tickFormat(t?:string):any;
//             duration(d?:number):any;
//             bullet(g:any):any;
//         }
//     }

// 	export = Bullet;
// }

declare namespace bullet {
    interface Bullet {
        width(x?:number):any;
        height(y?:number):any;
        orient(o?:string):any;
        tickFormat(t?:string):any;
        duration(d?:number):any;
        bullet(g:any):any;
    }
    interface BulletFactory {
        new():Bullet;
    }
    var bullet:BulletFactory;
}
// declare var bullet:BulletFactory;

export = bullet;
