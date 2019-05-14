import {DataView} from './DataView'
import {Storable} from './Data'
import {Point2D, Point} from './Point'
import {MouseTool, Interact} from './MouseTool'
import { LineBasicMaterial,Geometry,Vector3,Line, Color,VertexColors } from 'three';

export class LineStore extends Storable{
    
    data: Point2D[] = [];
}

export class LineView extends DataView{
    currentViews:any = {};
    onDataAdd(data:Storable){
        if(Storable.is(data,LineStore)){
            if(data.data.length<=0)return;
            let material = new LineBasicMaterial( { color: 0xffffff,vertexColors:VertexColors } );
            let geometry = new Geometry();
            for(let p of data.data){
                geometry.vertices.push(new Vector3(p.x,p.y,0));
                geometry.colors.push(new Color(p.color));
            }
            let line = new Line( geometry, material );
            line.userData["obj"]=data;
            this.app.currentScene.add( line );
            this.currentViews[data.id]=line;
        }
    }

    onDataChange(data:Storable){
        if(Storable.is(data,LineStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Line;
                this.app.currentScene.remove(l);
                if(data.data.length<=0)return;
                let material = new LineBasicMaterial( { color: 0xffffff,vertexColors:VertexColors } );
                let geometry = new Geometry();
                for(let p of data.data){
                    geometry.vertices.push(new Vector3(p.x,p.y,0));
                    geometry.colors.push(new Color(p.color));
                }
                let line = new Line( geometry, material );
                line.userData["obj"]=data;
                this.app.currentScene.add( line );
                this.currentViews[data.id]=line;
            }
        }
    }

    onDataRemove(data:Storable){
        if(Storable.is(data,LineStore)){
            if(this.currentViews[data.id]){
                const l = this.currentViews[data.id] as Line;
                this.app.currentScene.remove(l);
                delete this.currentViews[data.id];
            }
        }
    }
}

export class LineAddTool extends MouseTool{
    data?:LineStore;

    onMouseDown(pos:Point,ids:Interact,event:MouseEvent){
        pos.color = this.app.foregroundColor;
        if(this.data===undefined){
            this.data = new LineStore();
            this.data.data.push(pos);
            this.app.storeData(this.data);
        }
        else if(event.shiftKey){
            this.data.data.push(pos);
            this.app.changeData(this.data);
        }else{
            if(this.data.data.length>1){
                delete this.data;
                this.data = new LineStore();
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