<template>
  <div class="v-activate-chip">
    <div
      class="v-activate-chip__chip sprite sprite-Icon-meh-2"
      @click="deactivationChip"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-activate-chip',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['DEACTIVATION_CHIPS']),

    deactivationChip() {
      this.DEACTIVATION_CHIPS()
    }
  }
}
</script>

<style lang="scss">
.sprite-Icon-meh-2 {
  width: 48px;
  height: 48px;
  background-position: -989px -121px;
  cursor: pointer;
}
</style>
