<template>
    <span>
        <ui-icon-button icon="save" @change="save"></ui-icon-button>
        <input ref="uploadinput" @input="realopen" type="file" accept="*/dpst" style="display: none;">
        <ui-icon-button icon="insert_drive_file" @change="open"></ui-icon-button>
        <ui-icon-button icon="clear" @change="clear"></ui-icon-button>
    </span>
</template>


<script lang="ts">
import { Component, Prop, Vue,Watch } from 'vue-property-decorator';
import {PainterApp,ToolType} from '@/scripts/DPainter'
import { Event } from 'three';
import { DataStore,Layer } from '../scripts/Data';
@Component
export default class Filebar extends Vue {
    @Prop() private app!:PainterApp;

    save(){
        this.app.save();
    }

    open(){
        (this.$refs.uploadinput as HTMLInputElement).value="";
        (this.$refs.uploadinput as HTMLInputElement).click();
    }

    clear(){
        const d= new DataStore();
        d.addLayer(new Layer());
        this.app.open(d);
        this.app.setTool(ToolType.None);
    }

    realopen(e:Event){
        const input = e.target;
        if ('files' in input && input.files.length > 0) {
            let file = input.files[0];
            const reader = new FileReader();
            reader.onload = (event:any) =>{ 
                if(event.target==null||event.target.result==null)return;
                console.log(event.target.result); // desired file content
                const obj = JSON.parse(event.target.result);
                this.app.open(obj);
            }
            // reader.onerror = error => reject(error)
            reader.readAsText(file); // you could also read images and other binaries
        }
        
    }
}
</script>
