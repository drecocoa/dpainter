import {DataView} from './DataView'
import {Storable} from './Data'
import {Point2D, Point} from './Point'
import {MouseTool, Interact} from './MouseTool'
import { Scene,PerspectiveCamera,WebGLRenderer, Camera,LineBasicMaterial,Geometry,Vector3,Line, Color, BufferGeometry, BufferAttribute, Points, PointsMaterial } from 'three';
import { LineStore } from './Line';
import { BezierStore } from './Bezier';
import { BSplineStore } from './BSpline';


export class PointView extends DataView{
    currentViews:any = {};
    onDataAdd(data:Storable){
        if(Storable.is(data,LineStore)||Storable.is(data,BezierStore)||Storable.is(data,BSplineStore)){
            let material = new PointsMaterial( { color: 0x013FE9 } );
            let geometry = new Geometry();
            for(let p of data.data){
                geometry.vertices.push(new Vector3(p.x,p.y,0));
            }
            let point = new Points( geometry, material );
            point.userData["point"]=true;
            point.userData["obj"]=data;
            this.app.currentScene.add( point );
            this.currentViews[data.id]=point;
        }
    }

    onDataChange(data:Storable){
        if(Storable.is(data,LineStore)||Storable.is(data,BezierStore)||Storable.is(data,BSplineStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Points;
                this.app.currentScene.remove(l);
                let material = new PointsMaterial( { color: 0x013FE9 } );
                let geometry = new Geometry();
                for(let p of data.data){
                    geometry.vertices.push(new Vector3(p.x,p.y,0));
                }
                let point = new Points( geometry, material );
                point.userData["point"]=true;
                point.userData["obj"]=data;
                this.app.currentScene.add( point );
                this.currentViews[data.id]=point;
            }
        }
    }

    onDataRemove(data:Storable){
        if(Storable.is(data,LineStore)||Storable.is(data,BezierStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Points;
                this.app.currentScene.remove(l);
                delete this.currentViews[data.id];
            }
        }
    }
}


export class PointMoveTool extends MouseTool{
    obj?:Storable;
    index!:number;
    begin!:Point;
    onMouseDown(pos:Point,ids:Interact,event:MouseEvent):void{
        if(ids.data.length<=0)return;
        if(ids.pindex[0]==-1)return;
        this.obj=ids.data[0];
        this.begin=pos;
        this.index = ids.pindex[0];
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
        if(Storable.is(obj,LineStore)||Storable.is(obj,BezierStore)||Storable.is(obj,BSplineStore)){
            if(obj.data.length<this.index)return;
            obj.data[this.index].x+=delta.x;
            obj.data[this.index].y+=delta.y;

            this.app.changeData(obj);
        }
    }
}