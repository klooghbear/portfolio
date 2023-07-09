<template>
	<div class="panel-group">
		<label v-if="title != null" class="panel-group__title">
			{{ title }}
		</label>

		<ul class="panel-group__list">
			<slot/>
		</ul>
	</div>
</template>

<script lang="ts">
export default {
	name: "PanelGroup",

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
.panel-group {
	&__title {
		font-size: 35px;
	}

	ul {
		list-style: none;
		padding: 30px 0;
	}
}
</style>