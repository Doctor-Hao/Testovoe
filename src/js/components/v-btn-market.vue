<template>
  <div class="v-btn-market">
    <button
      type="submit"
      class="v-btn-market__button btn"
      :class="styleBtn"
      @click="click"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-btn-market',
  components: {},
  props: {
    text: {
      type: String,
      default: 'Установить'
    },
    disabled: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {}
  },
  computed: {
    styleBtn() {
      return {
        'v-btn-market__disabled': !this.disabled,
        'v-btn-market__active': this.disabled,
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
.v-btn-market {
  // .v-btn__button
  &__button {
  }

  &__disabled {
    pointer-events: none;
    background: #4c5865;
    color: #7d90a6;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    border: none;
  }

  &__active {
    background: #ff7f22;
  }
}
.btn {
}
</style>
