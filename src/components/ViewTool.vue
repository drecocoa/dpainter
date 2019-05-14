<template>
    <div class="scale">
        <ui-slider :model="scale" @input="onScaleChange($event)" ></ui-slider>
    </div>
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
export default class ViewTool extends Vue {
    @Prop() private app!:PainterApp;
    scale:number=100;
    @Watch("app")
    onAppChange(){
        this.scale = this.app.scale*100;
    }

    // @Watch("scale")
    onScaleChange(e:number){
        this.scale = e;
        this.app.scale = this.scale/100;
    }
}
</script>


<style lang="scss" scoped>
.scale{
    width: 80px;
    display: block;
}
</style>
