<template>
	<div class="app-header">
		<div class="app-header__logo">
			Sebastian Kloogh
		</div>

		<div class="app-header__navigation">
			<div class="app-header__navigation-icon">
				Blog
			</div>

			<div class="app-header__navigation-icon">
				Code
			</div>

			<div class="app-header__navigation-icon">
				About
			</div>

			<div class="app-header__navigation-icon">
				Contact
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "AppHeader",
}
</script>

<style lang="scss">
.app-header {
	z-index: 1;
	background: #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	text-align: center;
	border-bottom: 1px solid #d0034e; 
	padding: 30px 0;

	&__logo {
		font-size: 25px;
	}

	&__navigation {
		display: flex;
	}

	&__navigation-icon {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		padding: 15px 15px;
		cursor: pointer;

		&:hover {
			background: #eee;
			color: #000;
		}

		img {
			object-fit: contain;
			height: 40px;
		}
	}
}
</style>