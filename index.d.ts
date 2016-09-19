interface BulletFactory {
    width(x?:number):any;
    height(y?:number):any;
    orient(o?:string):any;
    tickFormat(t?:string):any;
    duration(d?:number):any;
    bullet(g:any):any;
}

declare var Bullet:BulletFactory;

declare module "Bullet" {
	export = Bullet;
}