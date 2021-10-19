<template>
  <div class="v-activate-hand">
    <div
      class="v-activate-hand__hand sprite sprite-Subtract-active"
      @click="deactivationHand"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-activate-hand',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['DEACTIVATION_HANDS']),

    deactivationHand() {
      this.DEACTIVATION_HANDS()
    }
  }
}
</script>

<style lang="scss">
.sprite-Subtract-active {
  width: 48px;
  height: 48px;
  background-position: -989px -179px;
  cursor: pointer;
}
</style>
