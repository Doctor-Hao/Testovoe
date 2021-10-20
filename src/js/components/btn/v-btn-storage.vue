<template>
  <div class="v-btn-storage">
    <button
      type="submit"
      class="v-btn-storage__button btn"
      :class="styleBtn"
      @click="click"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-btn-storage',
  components: {},
  props: {
    text: {
      type: String,
      default: 'Продать'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    styleBtn() {
      return {
        'v-btn-storage__disabled': !this.disabled,
        'v-btn-storage__active': this.disabled
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
.v-btn-storage {
	font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
	font-weight: 500;
  // .v-btn__button
  &__button {
  }

  &__disabled {
    pointer-events: none;
    border: 2px solid #4c5865;
    color: #4c5865;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  &__active {
    border: 2px solid #22b3e3;
    color: rgba(124, 218, 249, 1);
    &:hover {
      transition: all 0.5s ease 0s;
      background-color: #7cdaf9;
      color: rgba(33, 37, 41, 1);
    }
    &:active {
      background: transparent;
      border: 2px solid #22b3e3;
		color: #7CDAF9;
    }
  }
}
</style>
