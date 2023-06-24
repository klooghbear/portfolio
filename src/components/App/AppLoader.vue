<template>
  <div class="app-loader">
		<label v-if="headerMessage != null">
			{{ headerMessage }}
		</label>

		<div :class="classes">			
			<div class="app-loader__icon" />

			<div class="app-loader__icon" />

			<div class="app-loader__icon" />
		</div>

		<label v-if="footerMessage != null">
			{{ footerMessage }}
		</label>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppLoader",

  props: {
    loadingType: {
      type: String,
      required: true
    },

		headerMessage: {
			type: String || null,
			required: true
		},

		footerMessage: {
			type: String || null,
			required: true
		}
  },

  computed: {
    classes() {
      return {
        "app-loader--feature-flag": this.loadingType === "feature-flag",
      }
    }
  }
}
</script>

<style lang="scss">
.app-loader {
  display: flex;
	flex-direction: column;
	align-items: center;

  &__icon {
    margin: 10px;
    background-color: #d0034e;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    animation: blinker 1.25s linear infinite;
  }

  &__icon:nth-child(2) {
    animation-delay: 0.2s;
  }

  &__icon:nth-child(3) {
    animation-delay: 0.4s;
  }

  &--feature-flag {
    display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px 0;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .app-loader-project {
      height: 650px;
    }
  }
}
</style>