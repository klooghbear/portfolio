<template>
	<div class="hero-panel">
		<label v-if="title != null" class="hero-panel__title">
			{{ title }}
		</label>

		<br	>

		<div class="hero-panel__content">
			<slot/>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "HeroPanel",

	props: {
		title: {
			type: String,
			default() {
				return null
			}
		}
	}
}
</script>

<style lang="scss">
.hero-panel {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px 0;
	text-align: justify;
	border-bottom: 1px solid #42b883;
	padding-bottom: 40px;

	&__title {
		font-size: 40px;
	}

	&__content {
		font-size: 20px;
	}
}
</style>