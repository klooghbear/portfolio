<template>
  <div class="app" v-if="isLoading">
    <app-loader
      :loading-type="'feature-flag'"
      :footer-message="'Coming soon...'"
    />
  </div>

  <div class="app" v-else>
    <app-header />

    <app-summary />

    <panel-group :title="'Blogs'">
      <post-panel
        :destination="'/purpose'"
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

import {
  PollingMode,
  LogLevel,
  createConsoleLogger,
  getClient,
  User,
  type IConfigCatClient
} from "configcat-js";

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
      isMainApplicationEnabled: false,
      loading: true
    }
  },

  computed: {
    description() {
      return `
        This post details a bit about the purpose of this website.  I talk about
        ambitions and reflections on previous experiences as well as a general
        summary of who I am.
      `.trim()
    },

    isLoading() {
      if (this.isMainApplicationEnabled || this.loading) {
        return true
      }

      return false
    }
  },

  created() {
    this.getFeatureFlagStatus()
  },

  methods: {
    async getFeatureFlagStatus() {
      const { VITE_CONFIGCAT_KEY, VITE_USER_ID, MODE } = import.meta.env
      const logger = { logger: createConsoleLogger(LogLevel.Info) }
      const client = getClient(VITE_CONFIGCAT_KEY, PollingMode.AutoPoll, logger)
      const user = new User(VITE_USER_ID)

      try {
        if (MODE === "development") {
          this.isMainApplicationEnabled = true
        } else {
          this.isMainApplicationEnabled = await this.getValueAsync(client, user)
        }
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

    async getValueAsync(client: IConfigCatClient, user: User) {
      return await client.getValueAsync("isMainApplicationEnabled", false, user)
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
</style>