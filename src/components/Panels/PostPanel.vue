<template>
	<router-link :to="destination" class="post-panel">
		<div class="post-panel__header">
			<label class="post-panel__title">
				<div class="post-panel__title-icon" />

				{{ title }}
			</label>

			<label class="post-panel__date">
				<img src="/icons/calendar.svg"/>

				{{ date }}
			</label>
		</div>

		<div class="post-panel__description" v-html="description" />
	</router-link>
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
		},

		destination: {
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
	text-decoration: none;

	&__header {
		display: flex;
		margin-bottom: 20px;
		justify-content: space-between;
		color: #eee;
	}

	&__title {
		display: flex;
		align-items: center;
		font-size: 30px;
		cursor: pointer;
	}

	&__title-icon {
		margin: 10px 10px 10px 0;
    background-color: #42b883;
    height: 20px;
    width: 20px;
    border-radius: 50%;
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
		color: #eee;
	}

	&:hover {
		.post-panel__title-icon {
			background-color: #eee;
		}

		background-color: #42b883;
	}
}
</style>