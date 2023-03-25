<template>
  <div class="app">
    <app-header />

    <app-summary />

    <panel-group>
      <post-panel
        :title="'PocketSmith'"
        :date="'22-03-2023'"
        :description="pocketsmithDescription"
      />
    </panel-group>

    <app-footer />
  </div>
</template>

<script lang="ts">
import AppSummary from "./AppSummary.vue"
import AppFooter from "./AppFooter.vue"
import AppHeader from "./AppHeader.vue"
import PanelGroup from "../Panels/PanelGroup.vue"
import PostPanel from "../Panels/PostPanel.vue"

export default {
  name: "App",
  
  components: { AppHeader, AppFooter, AppSummary, PanelGroup, PostPanel },

  data() {
    return {
      date: Date.now.toString()
    }
  },

  computed: {
    pocketsmithDescription() {
      return `
        PocketSmith are specialists in personal money management tools. They
        integrate with all major banks around the world and incorporate features
        such as automatic bank syncing, rollover budgeting, customizable widgets
        and much more.  The Pockies' are a passionate bunch who care about
        software that's engaging, beautiful and robust. My role with PocketSmith
        was mainly in the frontend team.  I might spend my day building out a
        new customizable widget, creating a new notification banner for the
        support team, updating some of the legacy libraries or creating new 
        components to improve our architecture.

        <br>

        <br>

        I've learned a lot of lessons technically and personally working for
        the team at PocketSmith.  I've summarized them below!
      `.trim()
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