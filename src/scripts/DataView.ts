import {DataStore, Storable} from './Data'
import { PainterApp } from './DPainter';

export class DataView{
    app!:PainterApp;
    
    onEnable(app:PainterApp):void{
        this.app = app;
    }

    onDisable():void{
        console.log("Disabled");
    }

    
    //draw called per frame
    draw(gl: WebGLRenderingContext):void{

    }

    onDataAdd(data:Storable):void{
        
    }

    onDataChange(data:Storable):void{

    }

    onDataRemove(data:Storable):void{

    }
}