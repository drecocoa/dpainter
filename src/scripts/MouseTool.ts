import {PainterApp} from './DPainter'

import {Point} from './Point';
import { Storable } from './Data';

export interface Interact{
    data:Storable[]
    pindex:number[]
}

export class MouseTool{
    app!:PainterApp;
    onEnable(app:PainterApp):void{
        this.app = app;
    }
    onDisable():void{
        console.log("Disabled "+this.constructor.name);
    }
    //not clicked
    onMouseOver(pos:Point,interact:Interact,event:MouseEvent):void{
        //console.log(pos);
    }
    onMouseDown(pos:Point,interact:Interact,event:MouseEvent):void{
        //console.log(pos);
    }
    onMouseMove(pos:Point,interact:Interact,event:MouseEvent):void{
        //console.log(pos);
    }
    onMouseUp(pos:Point,interact:Interact,event:MouseEvent):void{
        //console.log(pos);
    }
}