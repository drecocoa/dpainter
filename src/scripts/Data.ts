import { LineStore } from './Line';

export class Layer{
    name:string="";
    alpha:number=1;
    data:any={};
}



export class VectorLayer extends Layer{

}


export class Storable{
    id:number=0;
    layer:number=0;

    type:string=this.constructor.name;
    static is<T extends Storable>(obj:any,c: new () => T): obj is T{
        if(obj.type===undefined)return false;
        return c.name==obj.type;
    }
}




export class DataStore{
    
    layers: Layer[] = [];

    //todo find a better solution
    recycledIds:number[] = [];
    largestId = 1;

    addLayer(layer:Layer ):void{
        this.layers.push(layer);
    }


    removeLayer(layerIndex:number):void{
        let delted = this.layers.splice(layerIndex,1);
        for (const d of delted) {
            Object.keys(d.data).forEach(
                k=>Object.keys(d.data[k]).forEach(
                    kk=>this.recycledIds.push(Number(kk))
                )
            );
        }
    }

    getAll():Storable[]{
        return this.layers.map(l=>(Object.values(l.data).flatMap(d=>Object.values(d)))).reduce((a,b)=>[...a,...b],[]);
    }

    getAllOfType<T extends Storable>(c: new () => T):T[]{
        return this.layers.map(l=>{
            if(l.data[c.name]===undefined)return [];
            return Object.values(l.data[c.name]) as T[] 
        }).reduce((a,b)=>[...a,...b],[]);
    }

    get<T extends Storable>(c: new () => T,id:number):T|undefined{
        return this.layers.map(l=>{
            if(l.data[c.name]===undefined)return undefined;
            return l.data[c.name][id]; 
        }).reduce((a,b)=>a===undefined?b:a);
    }

    remove<T extends Storable>(value:T,layerIndex:number):void{
        if(value.id==0){
            return;
        }
        let d = this.layers[layerIndex].data;
        const t = value.constructor.name;
        if(d[t] === undefined){
            d[t] = {};
            return;
        }
        if(d[t][value.id]){
            delete d[t][value.id];
            this.recycledIds.push(value.id);
        }
    }
    store<T extends Storable>(value:T,layerIndex:number):void{
        if(this.layers.length<=layerIndex){
            throw new Error("Layer index out of range");            
        }
        if(value.id==0){
            if(this.recycledIds.length>0){
                value.id = this.recycledIds.pop() as number;          
            }else{
                value.id = this.largestId++;
            }
        }
        let d = this.layers[layerIndex].data;
        const t = value.constructor.name;
        if(d[t] === undefined){
            d[t] = {};
        }
        d[t][value.id]=value;
    }



}
