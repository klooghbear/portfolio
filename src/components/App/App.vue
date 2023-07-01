<template>
  <div class="app" v-if="isFeatureFlagEnabled">
    <app-header />

    <app-summary />

    <panel-group>
      <post-panel
        :title="'The purpose of this website'"
        :date="'22-03-2023'"
        :description="description"
      />
    </panel-group>

    <app-footer />
  </div>

  <div class="app">
    <app-loader
      :loading-type="'feature-flag'"
      :footer-message="'Coming soon...'"
    />
  </div>
</template>

<script lang="ts">
import AppSummary from "./AppSummary.vue"
import AppFooter from "./AppFooter.vue"
import AppHeader from "./AppHeader.vue"
import AppLoader from "./AppLoader.vue"
import PanelGroup from "../Panels/PanelGroup.vue"
import PostPanel from "../Panels/PostPanel.vue"

export default {
  name: "App",
  
  components: { 
    AppHeader, 
    AppFooter, 
    AppSummary, 
    PanelGroup, 
    PostPanel, 
    AppLoader
  },

  data() {
    return {
      date: Date.now.toString(),
      isFeatureFlagEnabled: false
    }
  },

  computed: {
    description() {
      return `
        This post details a bit about the purpose of this website.  I talk about
        ambitions and reflections on previous experiences as well as a general
        summary of who I am.
      `.trim()
    }
  },
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
  color: #eee;
}
</style>