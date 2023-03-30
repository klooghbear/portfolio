<template>
	<button href="/" class="post-panel">
		<label class="post-panel__title">
			{{ this.title }}
		</label>

		<label class="post-panel__date">
			<img src="../../assets/icons/calendar.svg"/>

			{{ this.date }}
		</label>

		<div class="post-panel__description" v-html="this.description" />
	</button>
</template>

<script lang="ts">
export default {
	name: "PostPanel",

	props: {
		title: {
			type: String,
			required: true
		},

		date: {
			type: String,
			required: true
		},

		description: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss">
.post-panel {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	border-radius: 50px;

	&:hover {
		box-shadow: 0px 0px 16px 0 #eb92b339 0 0;
	}

	&__title {
		font-size: 30px;
	}

	&__date {
		display: flex;
		align-self: flex-start;
		padding-bottom: 5px;
		margin-bottom: 10px;
		border-bottom: 1px solid #d0034e;

		img {
			margin-right: 10px;
			object-fit: contain;
		}
	}

	&__description {
		text-align: justify;
	}
}
</style>