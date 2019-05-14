
import THREE, { Scene,PerspectiveCamera,WebGLRenderer, Camera,Color,LineBasicMaterial,Geometry,Vector3,Line, Raycaster } from 'three';

import {DataStore, Storable, Layer} from './Data'
import { Point} from './Point';
import { MouseTool } from './MouseTool';
import { LineAddTool, LineView } from './Line';
import {DataView} from './DataView'
import { ObjMoveTool, ObjDelTool } from './ObjectTool';
import { PointView, PointMoveTool } from './PointTool';
import { BezierAddTool, BezierView } from './Bezier';
import { BSplineAddTool, BSplineView } from './BSpline';
interface PainterBase{

    onEnable(canvas: HTMLElement):void

    update(deltaTime: number):void
}

export enum ToolType{
    None,BezierAdd,LineAdd,BSplineAdd,MoveObj,DelObj,MovePoint
}

export class PainterApp implements PainterBase{
    canvas!: HTMLCanvasElement;
    renderer!: WebGLRenderer;
    currentScene!: Scene;
    currentCamera!: Camera;
    rayCaster!: Raycaster;
    // gl !: WebGLRenderingContext;
    shouldUpdate : boolean = true;
    previousTime : number = 0;
    deltaTime : number =  0;
    toolType: ToolType = ToolType.None;
    tool : MouseTool = new MouseTool();
    views : DataView[] = [];
    data ?: DataStore;
    scale: number=1;
    currentLayer:number = 0;
    foregroundColor:string = "#000";
    backgroundColor:string = "#FFF";

    constructor(){
        this.currentScene = new Scene();
        this.currentScene.background = new Color("#FFF");
        this.data = new DataStore();
        this.data.addLayer(new Layer());
        this.tool.onEnable(this);
        const lineview = new LineView();
        lineview.onEnable(this);
        this.views.push(lineview);
        const bezierView = new BezierView();
        bezierView.onEnable(this);
        this.views.push(bezierView);
        const bsplineView = new BSplineView();
        bsplineView.onEnable(this);
        this.views.push(bsplineView);
        const pointView = new PointView();
        pointView.onEnable(this);
        this.views.push(pointView);
    }
    onEnable(canvas: HTMLCanvasElement): void {
        this.canvas = canvas;
        
        if(this.renderer){
            this.renderer.dispose();
        }
        this.renderer = new WebGLRenderer({canvas:this.canvas,antialias:true});
        this.currentCamera = new PerspectiveCamera( 45, canvas.width/canvas.height, 0.1, 1000 );
        this.currentCamera.position.set( 0, 0, 100 );
        this.currentCamera.lookAt( 0, 0, 0 );
        this.rayCaster = new Raycaster();
        // this.rayCaster.params.Points = {threshold:0.1};
        // this.rayCaster.linePrecision = 3;
        //todo https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas;

        //init webgl
        // let gl = canvas.getContext("webgl");
        // if(!gl){
        //     gl = canvas.getContext("experimental-webgl");
        // }
        // if(gl)this.gl = gl;
        this.registerListeners();
        this.animationFrame(0.01);
        this.initDataView();
    }

    onDisable():void{
        this.unregisterListeners();
    }

    initDataView(){
        if(this.data===undefined)return;
        this.data.getAll().forEach(value=>this.views.forEach(d=>d.onDataAdd(value)));
    }

    setTool(tool:ToolType){
        this.toolType = tool;
        this.tool.onDisable();
        switch(tool){
            case ToolType.BezierAdd:
                this.tool = new BezierAddTool();
                break;
            case ToolType.LineAdd:
                this.tool = new LineAddTool();
                break;
            case ToolType.BSplineAdd:
                this.tool = new BSplineAddTool();
                break;   
            case ToolType.MovePoint:
                this.tool = new PointMoveTool();
                break;   
            case ToolType.MoveObj:
                this.tool = new ObjMoveTool();
                break;   
            case ToolType.DelObj:
                this.tool = new ObjDelTool();
                break;
            case ToolType.None:
            default:
                this.tool = new MouseTool();
                break;
        }
        this.tool.onEnable(this);
    }

    private unregisterListeners():void{
        this.canvas.removeEventListener('mousedown',this.onMouse);
        this.canvas.removeEventListener('mouseover', this.onMouse);
        this.canvas.removeEventListener('mousemove',this.onMouse);
        this.canvas.removeEventListener('mouseup', this.onMouse);
        this.canvas.removeEventListener('wheel', this.onWheel);
    }

    private registerListeners():void{
        this.canvas.addEventListener('mousedown',this.onMouse);
        this.canvas.addEventListener('mouseover', this.onMouse);
        this.canvas.addEventListener('mousemove',this.onMouse);
        this.canvas.addEventListener('mouseup', this.onMouse);
        this.canvas.addEventListener('wheel', this.onWheel);
    }

    private onWheel = (ev:MouseWheelEvent)=>{
        const delta = Math.sign(ev.deltaY);
        this.scale +=delta/50;
    }
    mvec = new Vector3(); // create once and reuse
    mpos = new Vector3(); // create once and reuse 
    private onMouse = (ev:MouseEvent)=>{
        let point = new Point();
        this.mvec.set((ev.offsetX/this.canvas.width)*2-1,-( ev.offsetY/this.canvas.height )*2+1,0.5);
        this.rayCaster.setFromCamera(this.mvec,this.currentCamera);
        let inters = this.rayCaster.intersectObjects(this.currentScene.children,true);
        
        this.mvec.unproject( this.currentCamera );
        this.mvec.sub(this.currentCamera.position).normalize();
        let distance = -this.currentCamera.position.z/this.mvec.z;
        this.mpos.copy(this.currentCamera.position).add(this.mvec.multiplyScalar(distance));
        point.x = this.mpos.x;
        point.y = this.mpos.y;
        
        let ids:Storable[]=[];
        let pindex:number[]=[];

        for(let i of inters){
            //i.distanceToRay
            //todo
            if(i.object.userData["obj"]){
                const obj=i.object.userData["obj"];
                let d = ids.indexOf(obj);
                if(d==-1){
                    ids.push(obj);
                    if(i.object.userData["point"]&&i.index!==undefined){
                        pindex.push(i.index);
                    }else{
                        pindex.push(-1);
                    }
                }else if(pindex[d]==-1){
                    pindex[d]=i.index!==undefined?i.index:-1;
                }
            }
        }
        let interact = {data:ids,pindex:pindex};
        switch(ev.type){
            case 'mousedown':
                this.tool.onMouseDown(point,interact,ev);
                break;
            case 'mouseover':
                this.tool.onMouseOver(point,interact,ev);
                break;
            case 'mousemove':
                this.tool.onMouseMove(point,interact,ev);
                break;
            case 'mouseup':
                this.tool.onMouseUp(point,interact,ev);
                break;
        }
    }


    animationFrame = (time:number):void=>{
        this.deltaTime = time-this.previousTime;
        this.update(this.deltaTime);
        this.previousTime = time;
        if(this.shouldUpdate)
            window.requestAnimationFrame(this.animationFrame);
    }

    update(deltaTime:number): void {
        //update renderer
        if(this.scale==0)this.currentCamera.position.set(0,0,0);
        else this.currentCamera.position.set( 0, 0, 100/this.scale );
        this.renderer.render(this.currentScene,this.currentCamera);
    }
    
    storeData<T extends Storable>(value:T):void{
        if(this.data===undefined)return;
        this.data.store(value,this.currentLayer);
        this.views.forEach(d=>d.onDataAdd(value));
    }

    changeData<T extends Storable>(value:T):void{
        if(this.data===undefined)return;
        this.data.store(value,this.currentLayer);
        this.views.forEach(d=>d.onDataChange(value));
    }

    delData<T extends Storable>(value:T):void{
        if(this.data===undefined)return;
        this.data.remove(value,this.currentLayer);
        this.views.forEach(d=>d.onDataRemove(value));
    }

    private clearScene():void{
        while(this.currentScene.children.length > 0){ 
            this.currentScene.remove(this.currentScene.children[0]); 
        }
    }
    open(file:any):void{
        const ds = Object.assign(new DataStore(),file);
        this.clearScene();
        this.data = ds;
        this.initDataView();
    }
    save():void{
        if(this.data===undefined)return;
        const d = JSON.stringify(this.data);
        let blob = new Blob([d], {
            type: 'text/plain'
        });
        let objectURL = URL.createObjectURL( blob );
        const link = document.createElement( 'a' );
        link.style.display = 'none';
        document.body.appendChild( link );
        link.href = objectURL;
        link.href = URL.createObjectURL( blob );
        link.download = 'data.dpst';
        link.click();
    }
}

