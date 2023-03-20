<template>
	<div class="app-footer">
		This is where the content will sit.
	</div>
</template>

<script lang="ts">

export default {
	name: "AppFooter",
}
</script>

<style lang="scss">
.app-footer {
	background: #e6ded0;
	left: 15%;
	position: fixed;
	bottom: 0;
	width: 70%;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	justify-content: center;
	border-top: 1px solid #d0034e; 
}
</style>