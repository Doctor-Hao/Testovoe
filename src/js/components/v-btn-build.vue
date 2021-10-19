<template>
  <div class="v-btn-build">
    <button
      type="submit"
      class="v-btn-build__button btn longbnt"
      :class="styleBtn"
      @click="click"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-btn-build',
  components: {},
  props: {
    text: {
      type: String,
      default: 'Произвести за 10 монет'
    },
    disabledBuild: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    styleBtn() {
      return {
        'v-btn-build__disabledBuild': !this.disabledBuild,
        'v-btn-build__activeBuild': this.disabledBuild
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
  watch: {}
}
</script>

<style lang="scss">
.v-btn-build {
  margin: 0px 15px 0px 0px;

  @media (max-width: 1024px) {
    margin: 15px 0px 0px 0px;
  }
  // .v-btn-build
  &__button {
    margin: 0px 10px 0px 0px;
  }

  &__disabledBuild {
    border: 2px solid #4c5865;
    color: #4c5865;
    background: transparent;
    pointer-events: none;
  }

  &__activeBuild {
	   background: #ff7f22;
  }
}
.btn {
}
</style>
