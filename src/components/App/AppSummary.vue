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

			<sub-panel>
				“Experience is the name everyone gives to their mistakes.” 
				- Oscar Wilde

				<div class="app-summary__social-links">
					<img src="../../assets/icons/github.svg">

					<img src="../../assets/icons/linkedin.svg">
				</div>
			</sub-panel>
		</hero-panel>
	</div>
</template>

<script lang="ts">
import HeroPanel from "../Panels/HeroPanel.vue"
import SubPanel from "../Panels/SubPanel.vue"

export default {
	name: "AppSummary",

	components: { HeroPanel, SubPanel },
}
</script>

<style lang="scss">
.app-summary {
	&__social-links {
		display: flex;

		img {
			cursor: pointer;
			width: 50px;
			margin: 10px 10px 0 0;
			padding-bottom: 10px;
			border-bottom: 2px solid #e6ded0;

			&:hover {
				border-bottom: solid 2px #d0034e;
			}
		}
	}
}
</style>