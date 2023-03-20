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

				Blog
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__apps-image"
					src="../../assets/icons/code.svg"
					alt="apps-icon"
				>

				Code
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__about-image"
					src="../../assets/icons/network.svg"
					alt="about-icon"
				>

				About
			</div>

			<div class="app-header__navigation-icon">
				<img
					class="app-header__contact-image"
					src="../../assets/icons/mail.svg"
					alt="contact-icon"
				>

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
	background: #e6ded0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	text-align: center;
	border-bottom: 1px solid #d0034e; 
	padding: 30px 0;

	&__logo {
		font-size: 40px;
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
		cursor: pointer;

		&:hover {
			color: #d0034e;
		}

		img {
			height: 60px;
		}
	}
}
</style>