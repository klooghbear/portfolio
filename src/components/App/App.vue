<template>
  <div class="app">
    <app-header :message="'Share'"/>

    <app-footer :content="this.content"/>
  </div>
</template>

<script lang="ts">
import AppFooter from './AppFooter.vue'
import AppHeader from "./AppHeader.vue"

export default {
  name: "App",

  components: { AppHeader, AppFooter },

  computed: {
    content() {
      return `This is where the footer and it's content will sit.`
    }
  }
}
</script>

<style scoped lang='scss'>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>