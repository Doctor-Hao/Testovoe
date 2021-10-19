<template>
  <div class="v-hand">
    <div
      class="v-hand__hand sprite sprite-Subtract-have"
      @click="activeHand"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-hand',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['ACTIVE_HANDS']),

    activeHand() {
      this.ACTIVE_HANDS()
    }
  }
}
</script>

<style lang="scss">
.sprite-Subtract-have {
  width: 48px;
  height: 48px;
  background-position: -989px -237px;
  cursor: pointer;
}
</style>
