<template>
  <div class="v-popup" ref="popup-wrapper">
    <div class="v-popup__content">
      <div class="v-popup__close" @click="closePopup"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  components: {},
  props: {},
  data() {
    return {
      title: ''
    }
  },
  computed: {},
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  },
  mounted() {
    let vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup-wrapper']) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.v-popup {
  position: fixed;
  z-index: 10;
  background: rgba(26, 26, 26, 0.685);
  min-width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // .v-popap__content
  &__content {
    color: rgba(33, 37, 41, 1);
    background: #ffffff;
    width: 500px;
    margin: 0px auto;
    transform: translate(0, 90%);
    padding: 40px 70px 40px 100px;
    border-radius: 5px;

    @media (max-width: 1024px) {
      width: 420px;
    }
    @media (max-width: 767px) {
      transform: translate(0, 70%);
      width: 240px;
      padding: 80px 15px 40px 15px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 32px;
    font-size: calc(18px + 14 * ((100vw - 320px) / (1920 - 320)));
    line-height: 125%;
    color: #212529;
    margin: 0px 0px 25px 0px;
    @media (max-width: 767px) {
      text-align: center;
      margin: 0px 0px 15px 0px;
    }
  }

  &__text {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #4c5865;
    font-size: calc(14px + 5 * ((100vw - 320px) / (1920 - 320)));

    @media (max-width: 767px) {
      text-align: center;
    }
  }
  // .v-popap__close
  &__close {
    position: relative;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 16px;
      right: -50px;
      top: -25px;

      background: #ff7f22;
      transform: rotate(-135deg);
    }
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 16px;
      right: -50px;
      top: -25px;
      background: #ff7f22;
      transform: rotate(-45deg);
    }

    @media (max-width: 767px) {
      &::before {
        content: '';
        right: 0px;
        top: -70px;
      }
      &::after {
        content: '';
        right: 0px;
        top: -70px;
      }
    }
  }
}

.coin {
  position: relative;
  &::before {
    content: '';
    width: 43px;
    height: 52px;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../../assets/img/popap/coin.png');
    transform: translate(-150%, 30%);
    @media (max-width: 767px) {
      left: 50%;
      transform: translate(-50%, -120%);
    }
  }
}
</style>
