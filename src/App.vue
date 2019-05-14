<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUI)
Vue.use(BalmUIPlus)

export default Vue.extend({
  
})
</script>


<style lang="scss">
@import 'node_modules/balm-ui/src/styles/balm-ui.scss';
@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined");


body{
  margin: 0px;
  background-color: rgb(218, 218, 218)

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
