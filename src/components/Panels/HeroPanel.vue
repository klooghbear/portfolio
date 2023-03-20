<template>
	<div class="hero-panel">
		<label class="hero-panel__title">
			{{ this.title }}
		</label>

		<br>

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
	margin: 40px;
	text-align: justify;

	&__title {
		color: #d0034e;
		font-size: 34px;
	}

	&__content {
		font-size: 18px;
	}
}
</style>