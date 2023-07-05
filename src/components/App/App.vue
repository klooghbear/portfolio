<template>
  <div class="app" v-if="isProductionEnabled">
    <app-header />

    <app-summary />

    <panel-group>
      <post-panel
        :title="'The Purpose of this Website'"
        :date="'22-03-2023'"
        :description="description"
      />
    </panel-group>

    <app-footer />
  </div>

  <div class="app" v-if="isLoading">
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

import { env } from "process"
import { parseErrorMessage } from "../../helpers/errorHandler"

import * as configCat from "configcat-js";

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
      isProductionEnabled: false,
      isLoading: true,
      error: {
        message: ""
      }
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
  methods: {
    async getFeatureFlagStatus() {
      const { VUE_APP_CONFIGCAT_SDK } = env
      const hasSdkKey = VUE_APP_CONFIGCAT_SDK !== undefined
      let errorMessage: string | undefined

      if (hasSdkKey) {
        try {
          const configCatClient = configCat.default(VUE_APP_CONFIGCAT_SDK)

          this.isProductionEnabled = await configCatClient.getValueAsync(
            "productionEnabled",
            false
          )
        } catch (error) {
          errorMessage = parseErrorMessage(error)
          
          throw new Error(`Error retrieving feature flag config${errorMessage}`)
        }
      } else {
        errorMessage = `Your SDK key is incorrect, please reconfigure`

        throw new Error(`There was a problem where your config${errorMessage}`)
      }

      console.log(`productionEnabled is ${this.isProductionEnabled}`)
      this.isLoading = false
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
  color: #eee;
}
</style>../../errorHandler../../helpers/errorHandler