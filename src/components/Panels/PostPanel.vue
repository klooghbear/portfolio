<template>
	<button class="post-panel">
		<div href="/" class="post-panel__header">
			<label class="post-panel__title">
				{{ this.title }}
			</label>

			<label class="post-panel__date">
				<img src="../../assets/icons/calendar.svg"/>

				{{ this.date }}
			</label>
		</div>

		<div class="post-panel__description" v-html="description" />
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
	border-radius: 5px;
	padding: 10px;

	&__header {
		display: flex;
		margin-bottom: 20px;
		width: 75%;
		justify-content: space-between;
		text-decoration: none;
		color: #eee;
	}

	&__title {
		font-size: 30px;
		cursor: pointer;
	}

	&__date {
		display: flex;
		align-items: center;

		img {
			background-color: #eee;
			margin-right: 10px;
			padding: 2px;
			object-fit: contain;
			border-radius: 5px;
		}
	}

	&__description {
		text-align: justify;
	}

	&:hover {
		background-color: #d0034e;
	}
}
</style>