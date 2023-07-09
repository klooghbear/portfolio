<template>
	<div class="app-header">
		<div class="app-header__logo">
			Sebastian Kloogh
		</div>

		<div class="app-header__navigation">
			<div class="app-header__navigation-icon">
				<img src="/icons/blog.svg" alt="">
			</div>

			<div class="app-header__navigation-icon">
				<img src="/icons/mail.svg" alt="">
			</div>

			<div class="app-header__navigation-icon">
				<img src="/favicon.svg" alt="" style="fil">
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
	background: #1a1a1a;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	text-align: center;
	border-bottom: 1px solid #42b883; 
	padding: 30px 0;

	&__logo {
		display: flex;
		justify-items: start;
		font-size: 35px;
		width: 100%;
	}

	&__navigation {
		display: flex;
		width: 100%;
		justify-content: end;
	}

	&__navigation-icon {
		display: flex;
		flex-direction: column;
		background: #eee;
		font-size: 20px;
		padding: 15px 15px;
		cursor: pointer;
		margin-left: 10px;
		border-radius: 5px;

		&:hover {
			background: #42b883;
			color: #000;
		}

		img {
			object-fit: contain;
			height: 40px;
		}
	}
}
</style>