<template>
  <div class="v-chip">
    <div
      class="v-chip__chip sprite sprite-Icon-meh-1"
      @click="activeChip"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-chip',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['ACTIVE_CHIPS']),

    activeChip() {
      this.ACTIVE_CHIPS()
    }
  }
}
</script>

<style lang="scss">
.sprite-Icon-meh-1 {
  width: 48px;
  height: 48px;
  background-position: -989px -63px;
  cursor: pointer;
}
</style>
