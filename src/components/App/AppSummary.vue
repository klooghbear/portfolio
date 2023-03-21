<template>
	<div class="app-summary">
		<hero-panel :title="'Summary'">
			Welcome to my page.  My name is Sebastian and I'm a
			Software Engineer with a crush on web technologies.  Here
			you'll find previous projects, blog posts, reflections, work
			experiences and personal nuggets I'm collecting. The purpose 
			of this website is to give you some insight into what kind of 
			Software Engineer I am.  Happy reading!

			<br>

			<br>

			<sub-panel>
				“Experience is the name everyone gives to their mistakes.” 
				- Oscar Wilde

				<div class="app-summary__social-links">
					<a
						href="https://github.com/klooghbear"
						class="app-summary__social-image"
					>
						<img src="../../assets/icons/github.svg">
					</a>

					<a
						href="https://www.linkedin.com/in/sebastiankloogh/"
						class="app-summary__social-image"
					>
						<img src="../../assets/icons/linkedin.svg">
					</a>
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
	border-bottom: 1px solid;

	&__social-links {
		display: flex;

		img {
			cursor: pointer;
			object-fit: contain;
			height: 50px;
			width: 50px;
		}
	}

	&__social-image {
		display: flex;
		margin: 10px 20px 0 0;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		justify-content: center;
    align-content: center;
    align-items: center;

		&:hover {
			background-color: #d0034e;
		}
	}
}
</style>