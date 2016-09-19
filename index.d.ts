declare module "Bullet" {
    module Bullet {
        interface BulletFactory {
            width(x?:number):any;
            height(y?:number):any;
            orient(o?:string):any;
            tickFormat(t?:string):any;
            duration(d?:number):any;
            bullet(g:any):any;
        }
    }

	export = Bullet;
}