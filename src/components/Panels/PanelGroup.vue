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
	list-style: none;
	padding: 30px 0;
}
</style>