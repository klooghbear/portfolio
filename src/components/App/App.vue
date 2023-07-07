<template>
  <div class="app" v-if="isLoading(isProductionEnabled)">
    <app-loader
      :loading-type="'feature-flag'"
      :footer-message="'Coming soon...'"
    />
  </div>

  <div class="app" v-else>
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
</template>

<script lang="ts">
import AppSummary from "./AppSummary.vue"
import AppFooter from "./AppFooter.vue"
import AppHeader from "./AppHeader.vue"
import AppLoader from "./AppLoader.vue"
import PanelGroup from "../Panels/PanelGroup.vue"
import PostPanel from "../Panels/PostPanel.vue"

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
      loading: true,
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

  created() {
    this.getFeatureFlagStatus()
  },

  methods: {
    async getFeatureFlagStatus() {
      const SDK_KEY = import.meta.env.VITE_VUE_APP_CONFIGCAT_SDK
      const pollyMode = configCat.PollingMode.AutoPoll
      const logLevel = configCat.LogLevel.Info
      const logger = { logger: configCat.createConsoleLogger(logLevel) }
      const configCatClient = configCat.getClient(SDK_KEY, pollyMode, logger)
      const user = new configCat.User(import.meta.env.VITE_USER_ID)

      try {
        this.isProductionEnabled = await configCatClient.getValueAsync(
          "productionEnabled",
          false,
          user
        )
      } catch(error) {
        const errorMessage = `
          There was an issue evaluating your feature flag. Error message: 
          ${parseErrorMessage(error)}
        `.trim()
      
        throw new Error(errorMessage)
      } finally {
        this.loading = false
      }
    },

    isLoading(flagValue: boolean) {
      if (!flagValue || this.loading) {
        return true
      }

      return false
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