<template>
  <div class="home">
    <div>
      <Filebar :app="app"/>
      <Toolbar v-on:change="setTool" />
      <ColorTool :app="app"/>
    </div>
    <canvas ref="glCanvas" width="640" height="480"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'; // @ is an alias to /src
import Filebar from '@/components/Filebar.vue'; // @ is an alias to /src
import ColorTool from '@/components/ColorTool.vue'; // @ is an alias to /src

import {PainterApp, ToolType} from '@/scripts/DPainter'; // @ is an alias to /src

@Component({
  components: {
    Toolbar,Filebar,ColorTool
  }
})
export default class Home extends Vue {
  app : PainterApp = new PainterApp();
  mounted():void{
    this.app.bindCanvas(this.$refs.glCanvas as HTMLCanvasElement);
  }
  setTool(tool:ToolType):void{
    this.app.setTool(tool);
  }
}
</script>


<style lang="scss" scoped>
.home{
}
</style>
