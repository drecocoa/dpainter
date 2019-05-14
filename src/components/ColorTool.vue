<template>
    <span>
        <ui-icon-button :style="{ color:foreColor }" icon="color_lens" @change="foreground"></ui-icon-button>
        <ui-icon-button  :style="{ color:backColor }" @change="background">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/>
                <circle cx="17.5" cy="11.5" r="1.5"/>
            </svg>
        </ui-icon-button>
        <ui-dialog
            v-model="open"
            @confirm="onConfirm">
            <ui-dialog-title>{{pickfore?"Foreground":"Background"}}</ui-dialog-title>
            <ui-dialog-content>
                <chrome-picker class="picker" v-model="tempColor" />
            </ui-dialog-content>
            <ui-dialog-actions></ui-dialog-actions>
        </ui-dialog>
    </span>
</template>


<script lang="ts">
import { Component, Prop, Vue,Watch } from 'vue-property-decorator';
import {PainterApp,ToolType} from '@/scripts/DPainter'
import { Event } from 'three';
import { Chrome } from 'vue-color'

@Component({
  components: {
    "chrome-picker":Chrome
  }
})

//@Component
export default class ColorTool extends Vue {
    @Prop() private app!:PainterApp;
    open:boolean=false;
    foreColor:string ="#000";
    backColor:string ="#FFF";
    tempColor:any ="#FFF";
    pickfore:boolean= true;
    foreground(){
        this.pickfore = true;
        this.tempColor = this.foreColor;
        this.open = true;
    }

    background(){
        this.pickfore = false;
        this.tempColor = this.backColor;
        this.open = true;
    }

    @Watch("app")
    onAppChange(){
        this.foreColor = this.app.foregroundColor;
        this.backColor = this.app.backgroundColor;
    }

    onConfirm(){
        if(this.pickfore){
            this.foreColor = this.tempColor.hex;
            this.app.foregroundColor = this.foreColor;
        }else{
            this.backColor= this.tempColor.hex;
            this.app.backgroundColor = this.backColor;
        }
    }
}
</script>


<style lang="scss" scoped>
.picker{
    box-shadow: none;
    width: 100%;
}
</style>
