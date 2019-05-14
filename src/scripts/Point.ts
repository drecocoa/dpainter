
export interface Point2D{
    x:number;
    y:number;
    color:string;
    size :number;
}

export interface Point3D extends Point2D{
    z:number;
}


// export class ColorHelper{
//     static create(r:number=0,g:number=0,b:number=0,a:number=1){
//         return {r:r,g:g,b:b,a:a};
//     }
//     static white:Color = ColorHelper.create(1,1,1);
//     static black:Color = ColorHelper.create(0,0,0);

//     static toCSVString(c:Color){
//         return `rgba(${c.r},${c.g},${c.b},${(c.a)/255.0})`
//     }

// }

export class Point implements Point2D{
    x: number=0;
    y: number=0;

    size :number = 1;
    color:string = "#000";


    static add(a:Point2D,b: Point2D): Point {
        let p =  new Point();
        p.x = a.x+b.x;
        p.y = a.y+b.y;
        p.color = a.color;
        p.size = a.size;
        return p;
    }
    static minus(a:Point2D,b: Point2D): Point {
        let p =  new Point();
        p.x = a.x-b.x;
        p.y = a.y-b.y;
        p.color = a.color;
        p.size = a.size;
        return p;
    }
    static multiply(a:Point2D,b: number): Point {
        let p =  new Point();
        p.x = a.x*b;
        p.y = a.y*b;
        p.color = a.color;
        p.size = a.size;
        return p;
    }
    static equals(a:Point2D,b: Point2D):boolean{
        return a.x==b.x&&a.y==b.y;
    }
}