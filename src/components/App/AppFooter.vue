<template>
	<div class="app-footer">
		{{ this.content }}
	</div>
</template>

<script lang="ts">

export default {
	name: "AppFooter",

	props: {
		content: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss">
.app-footer {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	color: #eee;
}
</style>