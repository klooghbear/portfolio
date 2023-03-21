<template>
  <div class="app">
    <app-header />
    
    <panel-group>
      <li :key="appComponent" v-for="appComponent in this.components">
        <component :is="appComponent"/>
      </li>
    </panel-group>

    <app-footer />
  </div>
</template>

<script lang="ts">
import AppSummary from "./AppSummary.vue"
import AppFooter from "./AppFooter.vue"
import AppHeader from "./AppHeader.vue"
import PanelGroup from "../Panels/PanelGroup.vue"

export default {
  name: "App",

  components: { AppHeader, AppFooter, AppSummary, PanelGroup },

  computed: {
    components() {
      return { AppSummary }
    }
  }
}
</script>

<style scoped lang='scss'>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;   
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>