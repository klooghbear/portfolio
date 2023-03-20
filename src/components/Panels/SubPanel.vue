<template>
	<div class="sub-panel">
		<div class="sub-panel__content">
			<slot/>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "SubPanel"
}
</script>

<style lang="scss">
.sub-panel {
	display: flex;
	flex-direction: column;
	
	&__content {
		font-style: italic;
	}
}
</style>