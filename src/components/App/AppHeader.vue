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
	justify-content: space-between;
	position: fixed;
	width: 60%;
	top: 0;
	left: 20%;
	text-align: center;
	border-bottom: 1px solid #d0034e; 
	padding: 30px 0;

	&__logo {
		font-size: 35px;
	}

	&__navigation {
		display: flex;
	}

	&__navigation-icon {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		padding: 0 15px;
		cursor: pointer;

		&:hover {
			color: #d0034e;
		}

		img {
			object-fit: contain;
			height: 40px;
		}
	}
}
</style>