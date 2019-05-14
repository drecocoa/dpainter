import {DataView} from './DataView'
import {Storable} from './Data'
import {Point2D, Point} from './Point'
import {MouseTool, Interact} from './MouseTool'
import { LineBasicMaterial,Geometry,Vector3,Line, Color, BufferGeometry, Float32BufferAttribute, VertexColors } from 'three';

export class BezierStore extends Storable{
    data: Point2D[] = [];
}


export class BezierView extends DataView{
    currentViews:any = {};

    onDataAdd(data:Storable){
        if(Storable.is(data,BezierStore)){
            let material = new LineBasicMaterial( { color: 0xffffff,vertexColors:VertexColors } );
            let geometry = new BufferGeometry();
            this.genPoints(data,geometry);
            let line = new Line( geometry, material );
            line.userData["obj"]=data;
            this.app.currentScene.add( line );
            this.currentViews[data.id]=line;
        }
    }

    onDataChange(data:Storable){
        if(Storable.is(data,BezierStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Line;
                this.app.currentScene.remove(l);
                let material = new LineBasicMaterial( { color: 0xffffff,vertexColors:VertexColors } );
                let geometry = new BufferGeometry();
                this.genPoints(data,geometry);
                let line = new Line( geometry, material );
                line.userData["obj"]=data;
                this.app.currentScene.add( line );
                this.currentViews[data.id]=line;
            }
        }
    }

    onDataRemove(data:Storable){
        if(Storable.is(data,BezierStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Line;
                this.app.currentScene.remove(l);
                delete this.currentViews[data.id];
            }
        }
    }


    genPoints(data:BezierStore,g:BufferGeometry,interp:number=100){
        if(data.data.length<=0)return;
        if(data.data.length==1){
            return;
        }else if((data.data.length-1)%3!=0){
            //
            //return;
        }
        const pts = Math.floor((data.data.length-1)/3)*interp;
        let positions = new Float32Array( pts * 3 );
        let colors = new Float32Array( pts * 3 );
        let begin=0;
        let intp = 1/interp;
        for(let i=1;i+2<data.data.length;i+=3){
            begin=this.processPart(data.data[i-1],data.data[i],data.data[i+1],data.data[i+2],positions,colors,begin,intp);
        }
        g.addAttribute("position",new Float32BufferAttribute(positions,3));
        g.addAttribute("color",new Float32BufferAttribute(colors,3));
        g.setDrawRange(0,begin/3);
    }

    deCast(pointsX:number[],pointsY:number[],dst:Point2D,t:number){
        const tm = 1-t;
        if(pointsX.length==1){
            dst.x = pointsX[0];
            dst.y = pointsY[0];
        }else{
            let nx:number[] =new Array(pointsX.length-1);
            let ny:number[] =new Array(pointsY.length-1);
            for(let i=0;i<nx.length;++i){
                let x = tm*pointsX[i]+t*pointsX[i+1];
                let y = tm*pointsY[i]+t*pointsY[i+1];
                nx[i]=(x);
                ny[i]=(y);
            }
            this.deCast(nx,ny,dst,t);
        }
    }
    //output out index
    processPart(p0:Point2D,p1:Point2D,p2:Point2D,p3:Point2D,pos:Float32Array,color:Float32Array,begin:number,intp:number):number{
        const c0 = new Color(p0.color);
        const c3 = new Color(p3.color);
        let xx:number[];
        let yy:number[];
        if(Point.equals(p0,p1)&&Point.equals(p2,p3)){
            //pure line
            color[begin] = c0.r;
            pos[begin++] = p0.x;
            color[begin] = c0.g;
            pos[begin++] = p0.y;
            color[begin] = c0.b;
            pos[begin++] = 0;

            color[begin] = c3.r;
            pos[begin++] = p3.x;
            color[begin] = c3.g;
            pos[begin++] = p3.y;
            color[begin] = c3.b;
            pos[begin++] = 0;
            return begin;
        }else if(Point.equals(p0,p1)){
            xx = [p0.x,p2.x,p3.x];
            yy = [p0.y,p2.y,p3.y];
        }else if(Point.equals(p2,p3)){
            xx = [p0.x,p1.x,p3.x];
            yy = [p0.y,p1.y,p3.y];
        }else{
            xx = [p0.x,p1.x,p2.x,p3.x];
            yy = [p0.y,p1.y,p2.y,p3.y];
        }
        let tempP = new Point();
        //point to array
        for(let t=0;t<=1;t+=intp){
            this.deCast(xx,yy,tempP,t);
            const c = c0.lerp(c3,t);
            color[begin] = c.r;
            pos[begin++] = tempP.x;
            color[begin] = c.g;
            pos[begin++] = tempP.y;
            color[begin] = c.b;
            pos[begin++] = 0;
        }
        return begin;
    }
}


export class BezierAddTool extends MouseTool{
    data?:BezierStore;
    begin!:Point;
    index!:number;
    isDown:boolean = false;
    onMouseDown(pos:Point,ids:Interact,event:MouseEvent){
        this.isDown = true;
        pos.color = this.app.foregroundColor;
        if(this.data===undefined){
            this.data = new BezierStore();
            this.data.data.push(Object.assign(new Point(),pos));
            this.data.data.push(Object.assign(new Point(),pos));
            this.begin=pos;
            this.index=0;
            this.app.storeData(this.data);
        }
        else if(event.shiftKey){
            this.index=this.data.data.length+1;
            this.begin=pos;
            this.data.data.push(Object.assign(new Point(),pos));
            this.data.data.push(Object.assign(new Point(),pos));
            this.data.data.push(Object.assign(new Point(),pos));
            this.app.changeData(this.data);
        }else{
            if(this.data.data.length>3){
                delete this.data;
                this.data = new BezierStore();
                this.data.data.push(Object.assign(new Point(),pos));
                this.data.data.push(Object.assign(new Point(),pos));
                this.begin=pos;
                this.index=0;
                this.app.storeData(this.data);
                return;
            }
            this.data.data.push(Object.assign(new Point(),pos));
            this.data.data.push(Object.assign(new Point(),pos));
            this.data.data.push(Object.assign(new Point(),pos));
            this.app.changeData(this.data);
            delete this.data;
        }
    }
    onMouseMove(pos:Point,ids:Interact,event:MouseEvent):void{
        if(!this.isDown||!this.data)return;
        let delta = Point.minus(pos,(this.begin));
        this.move(this.data,delta);
        this.begin=pos;
    }
    onMouseUp(pos:Point,ids:Interact,event:MouseEvent){
        this.isDown = false;
    }
    move(data:BezierStore,delta:Point){
        if(data.data.length<this.index+1)return;
        data.data[this.index+1].x+=delta.x;
        data.data[this.index+1].y+=delta.y;
        if(this.index-1>=0){
            data.data[this.index-1].x =2*data.data[this.index].x-data.data[this.index+1].x;
            data.data[this.index-1].y =2*data.data[this.index].y-data.data[this.index+1].y;
        }
        this.app.changeData(data);
    }
}