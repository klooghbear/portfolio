<template>
	<div class="app-summary">
		<hero-panel>
			Hey there! Welcome to my digital realm.  This is my little  corner 
			of the web where I share my thoughts, journeys, dreams, and
			perspectives.

			<br>

			<br>

			Here, you'll find blog posts varying from tech to philosophy, travel
			to personal development, and so much more. I wear multiple hats, and
			this platform is a kaleidoscope reflecting the diverse facets of my
			interests.

			<br>

			<br>

			Whether you're a curious wanderer or someone with a similar zest for
			life, you're welcome here. Let's explore, learn, dream, and maybe
			even change the world, one blog post at a time. Happy browsing!

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
						<img src="/icons/github.svg">
					</a>

					<a
						href="https://www.linkedin.com/in/sebastiankloogh/"
						class="app-summary__social-image"
					>
						<img src="/icons/linkedin.svg">
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
	padding: 20px 0 10px;

	&__social-links {
		display: flex;
		padding-top: 20px;

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
		border-radius: 5px;
		justify-content: center;
    align-content: center;
    align-items: center;
		background-color: #eee;

		&:hover {
			background-color: #42b883;
		}
	}
}
</style>