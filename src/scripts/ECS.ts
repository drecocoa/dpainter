
class Entity{
    id!:number
}

class Component{
    entity!:Entity;
    lastDirty:boolean = false;
    dirty:boolean = false;
}

class Manager{
    protected entities:any = {};
    protected recycledEntities:Entity[] = [];
    protected largestId = 1;
    protected data:any = {};
    protected systems:System[] = [];

    hasEntity(e:Entity):boolean{
        return (this.entities[e.id] !== undefined);
    }
    createEntity():Entity{
        let e:Entity;
        if(this.recycledEntities.length>0){
            e = this.recycledEntities.pop() as Entity;
            
        }else{
            e = new Entity();
            e.id=this.largestId;
            this.largestId++;
        }
        this.entities[e.id] = e;
        return e;
    }
 
    destroyEntity(e:Entity):void{
        if(!this.hasEntity(e)) return;
        for(let k in this.data){
            if(this.data[k][e.id] !== undefined){
                delete this.data[k][e.id];
            }
        }
        this.recycledEntities.push(this.entities[e.id]);
        delete this.entities[e.id];
        return;
    }


    hasComponent<T extends Component>(c: new () => T,e:Entity):boolean{
        if(this.entities[e.id] === undefined) return false;
        let t = c.constructor.name;
        return (this.data[t] !== undefined && this.data[t][e.id]!==undefined);
    }

    //todo check valid?
    getComponent<T extends Component>(c: new () => T,e:Entity):T{
        //if(!this.hasComponent(c,e)) throw new Error("Invalid entity or no such component attached");
        let t = c.constructor.name;
        return this.data[t][e.id];
    }

    setComponent<T extends Component>(value:T,e:Entity):void{
        if(this.entities[e.id] === undefined) return;
        value.entity = e;
        value.dirty = true;
        let t = value.constructor.name;
        if(this.data[t] === undefined){
            this.data[t] = {};
        }
        this.data[t][e.id]=value;
        
        //this.data
    }

    //todo check valid?
    removeComponent<T extends Component>(c: new () => T,e:Entity):void{
        let t = c.constructor.name;
        delete this.data[t][e.id];
    }
    

    addSystem<S extends System>(s:S):void{
        if(this.systems.some((ss=>(s.constructor.name)===(ss.constructor.name)))){
            throw new Error("System has already been added");
        }

        this.systems.push(s);
        s.initialize();
    }

    removeSystem<S extends System>(s: new () => S):void{
        let i = this.systems.findIndex(ss=>(s.constructor.name)===(ss.constructor.name));
        if(i==-1)throw new Error("System hasn't been added");
        this.systems[i].cleanup();
        this.systems.splice(i,1);
    }

    protected update():void{
        //avoid call loop
        // if(this.update.caller.constructor)
        for(let v of Object.values(this.data)){
            for(let c of Object.values(v)){
                let cc = (c as Component);
                cc.lastDirty = cc.dirty;
                cc.dirty = false;
            }
        }
        for(let s of this.systems){
            s.update();
        }
    }


}

class System {
    manager!: Manager;

    initialize():void{

    }

    update():void{

    }

    cleanup():void{

    }
}