import {MouseTool, Interact} from './MouseTool'
import { Point } from './Point';
import { DataStore, Storable } from './Data';
import { LineStore } from './Line';
import { BezierStore } from './Bezier';


export class ObjDelTool extends MouseTool{
    obj?:Storable;
    begin!:Point;
    onMouseDown(pos:Point,ids:Interact,event:MouseEvent):void{
        if(ids.data.length<=0)return;
        this.obj=ids.data[0];
    }

    onMouseUp():void{
        if(!this.obj)return;
        this.app.delData(this.obj);
        delete this.obj;

    }
}


export class ObjMoveTool extends MouseTool{
    obj?:Storable;
    begin!:Point;
    onMouseDown(pos:Point,ids:Interact,event:MouseEvent):void{
        if(ids.data.length<=0)return;
        this.obj=ids.data[0];
        this.begin=pos;
    }

    onMouseMove(pos:Point,ids:Interact,event:MouseEvent):void{
        if(!this.obj)return;
        let delta = Point.minus(pos,(this.begin));
        this.move(this.obj,delta);
        this.begin=pos;
    }

    onMouseUp():void{
        if(!this.obj)return;
        delete this.obj;

    }
    move(obj:Storable,delta:Point){
        if(Storable.is(obj,LineStore)||Storable.is(obj,BezierStore)){
            obj.data.forEach(d=>{
                d.x+=delta.x;
                d.y+=delta.y;
            });
            this.app.changeData(obj);
        }
    }
}