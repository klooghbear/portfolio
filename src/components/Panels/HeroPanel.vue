<template>
	<div class="hero-panel">
		<label class="hero-panel__title">
			{{ this.title }}
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
			required: true
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

	&__title {
		font-size: 40px;
	}

	&__content {
		font-size: 20px;
	}
}
</style>