<template>
	<div class="post-panel">
		<label class="post-panel__title">
			{{ this.title }}
		</label>

		<label class="post-panel__date">
			<img src="../../assets/icons/calendar.svg"/>

			{{ this.date }}
		</label>

		<div class="post-panel__description" v-html="this.description" />
	</div>
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