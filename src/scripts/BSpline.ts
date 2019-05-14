import {DataView} from './DataView'
import {Storable} from './Data'
import {Point2D, Point} from './Point'
import {MouseTool, Interact} from './MouseTool'
import { LineBasicMaterial,Geometry,Vector3,Line, Color, BufferGeometry, Float32BufferAttribute, VertexColors } from 'three';

export class BSplineStore extends Storable{
    data: Point2D[] = [];
}


export class BSplineView extends DataView{
    currentViews:any = {};

    onDataAdd(data:Storable){
        if(Storable.is(data,BSplineStore)){
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
        if(Storable.is(data,BSplineStore)){
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
        if(Storable.is(data,BSplineStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Line;
                this.app.currentScene.remove(l);
                delete this.currentViews[data.id];
            }
        }
    }


    genPoints(data:BSplineStore,g:BufferGeometry,interp:number=150){
        if(data.data.length<=0)return;
        if(data.data.length<=3){
            return;
        }
        const c0 = new Color(data.data[0].color);
        const c3 = new Color(data.data[data.data.length-1].color);

        const knots = new Array<number>(data.data.length+4);
        knots[0]=0;
        knots[1]=0;
        knots[2]=0;
        knots[3]=0;
        const l = knots.length-7;
        for(let i=1;i<l;++i){
            knots[i+3] = (i)/l;
        }
        knots[knots.length-1]=1;
        knots[knots.length-2]=1;
        knots[knots.length-3]=1;
        knots[knots.length-4]=1;

        let xx:number[]=[];
        let yy:number[]=[];
        data.data.forEach(d=>{
            xx.push(d.x);
            yy.push(d.y)
        });

        let intp = 1/interp;
        let positions = new Float32Array( (interp+1) * 3 );
        let colors = new Float32Array( (interp+1) * 3 );
        let begin=0;
        for(let t=0;t<=1;t+=intp){
            //first pass
            let b0:number[] = knots.map((d,i)=>((t<d||(i+1<knots.length&&t>=knots[i+1]))?0:1));
            let deg =1;
            let b1 = b0.map((a,i)=>{
                let r=0;
                let dd =knots[i+deg]-knots[i];
                if(dd!=0){
                    r+=(t-knots[i])/(dd)*a
                }
                dd =knots[i+1+deg]-knots[i+1];
                if(dd!=0){
                    r+=(knots[i+1+deg]-t)/(dd)*b0[i+1];
                }
                return r;
            });
            deg =2;
            let b2 = b1.map((a,i)=>{
                let r=0;
                let dd =knots[i+deg]-knots[i];
                if(dd!=0){
                    r+=(t-knots[i])/(dd)*a
                }
                dd =knots[i+1+deg]-knots[i+1];
                if(dd!=0){
                    r+=(knots[i+1+deg]-t)/(dd)*b1[i+1];
                }
                return r;
            });
            deg =3;
            let b3 = b2.map((a,i)=>{
                let r=0;
                let dd =knots[i+deg]-knots[i];
                if(dd!=0){
                    r+=(t-knots[i])/(dd)*a
                }
                dd =knots[i+1+deg]-knots[i+1];
                if(dd!=0){
                    r+=(knots[i+1+deg]-t)/(dd)*b2[i+1];
                }
                return r;
            });
            const x = xx.map((d,i)=>d*b3[i]).reduce((a,b)=>a+b);
            const y = yy.map((d,i)=>d*b3[i]).reduce((a,b)=>a+b);
            const c = c0.lerp(c3,t);
            colors[begin] = c.r;
            positions[begin++] = x;
            colors[begin] = c.g;
            positions[begin++] = y;
            colors[begin] = c.b;
            positions[begin++] = 0;
        }
        g.addAttribute("position",new Float32BufferAttribute(positions,3));
        g.addAttribute("color",new Float32BufferAttribute(colors,3));
        g.setDrawRange(0,begin/3);
    }
}

export class BSplineAddTool extends MouseTool{
    data?:BSplineStore;

    onMouseDown(pos:Point,ids:Interact,event:MouseEvent){
        pos.color = this.app.foregroundColor;
        if(this.data===undefined){
            this.data = new BSplineStore();
            this.data.data.push(pos);
            this.app.storeData(this.data);
        }
        else if(event.shiftKey){
            this.data.data.push(pos);
            this.app.changeData(this.data);
        }else{
            if(this.data.data.length>3){
                delete this.data;
                this.data = new BSplineStore();
                this.data.data.push(pos);
                this.app.storeData(this.data);
                return;
            }
            this.data.data.push(pos);
            this.app.changeData(this.data);
            delete this.data;
        }
    }

    
}