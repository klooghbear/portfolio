<template>
	<ul class="panel-group">
		<slot/>
	</ul>
</template>

<script lang="ts">
export default {
	name: "PanelGroup"
}
</script>

<style lang="scss">
.panel-group {
	list-style: none
}
</style>