<template>
  <div class="v-coin">
    <span></span>
    <img class="v-coin__img" src="/assets/img/wallet/coin.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'v-coin',
  components: {},
  data() {
    return {
      title: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.v-coin {
  position: relative;
  display: inline-flex;
  span {
    margin: 0px 0px 10px 2px;
  }

  &__img {
    position: absolute;
    min-width: 16px;
    min-height: 20px;
  }
}
</style>
