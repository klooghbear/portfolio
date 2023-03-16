<template>
	<div class="app-header">
		<div class="app-header__logo">
			Sebastian Kloogh
		</div>

		<div class="app-header__navigation">
			<div class="app-header__navigation-icon">
				<img
					class="app-header__blog-image"
					src="../../assets/icons/blog.svg"
					alt="blog-icon"
				>

				blog
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__apps-image"
					src="../../assets/icons/code.svg"
					alt="apps-icon"
				>

				code
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__about-image"
					src="../../assets/icons/network.svg"
					alt="about-icon"
				>

				about
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__contact-image"
					src="../../assets/icons/mail.svg"
					alt="contact-icon"
				>

				contact
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
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	text-align: center;
	margin-top: 20px;
	border-bottom: 1px solid #d0034e; 
	padding-bottom: 20px;

	&__logo {
		font-size: 30px;
	}

	&__navigation {
		display: flex;
		justify-content: space-around;
		width: 30%;
	}

	&__navigation-icon {
		display: flex;
		flex-direction: column;
		font-size: 20px;

		img {
			height: 60px;
		}
	}
}
</style>