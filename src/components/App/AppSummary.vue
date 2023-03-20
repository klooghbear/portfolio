<template>
	<div class="app-summary">
		<hero-panel :title="'Summary'">
			Welcome to my page.  My name is Sebastian and I'm a
			Software Engineer with a crush on web technologies.  Here
			you'll find previous projects, blog posts, reflections, work
			experiences and personal nuggets I've collected over my
			career. The purpose of this website is to give you some
			insight into what kind of Software Engineer I am.  Happy 
			reading!

			<br>

			<br>

			“Experience is the name everyone gives to their mistakes.” 
			- Oscar Wilde
		</hero-panel>
	</div>
</template>

<script lang="ts">
import HeroPanel from "../Panels/HeroPanel.vue"

export default {
	name: "AppSummary",

	components: { HeroPanel },
}
</script>

<style lang="scss">
.app-summary {

}
</style>