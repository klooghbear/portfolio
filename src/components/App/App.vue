<template>
  <div class="app">
    <app-header />

    <app-footer />
  </div>
</template>

<script lang="ts">
import AppFooter from "./AppFooter.vue"
import AppHeader from "./AppHeader.vue"

export default {
  name: "App",

  components: { AppHeader, AppFooter },
}
</script>

<style scoped lang='scss'>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 140px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>