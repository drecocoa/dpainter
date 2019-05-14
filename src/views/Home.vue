<template>
  <div class="home">
    <div>
      <div>
        <Filebar :app="app"/>
      </div>
      <div>
        <Toolbar v-on:change="setTool" />
      </div>
      <div>
        <ColorTool :app="app"/>
      </div>
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
import ViewTool from '@/components/ViewTool.vue'; // @ is an alias to /src

import {PainterApp, ToolType} from '@/scripts/DPainter'; // @ is an alias to /src

@Component({
  components: {
    Toolbar,Filebar,ColorTool,ViewTool
  }
})
export default class Home extends Vue {
  app : PainterApp = new PainterApp();
  mounted():void{
    this.app.onEnable(this.$refs.glCanvas as HTMLCanvasElement);
  }

  destroyed():void{
    this.app.onDisable();
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
