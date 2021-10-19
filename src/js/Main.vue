<template>
  <div class="main _container">
    <div class="main__vh">
      <vHeader />
      <vMainSlide />
    </div>
    <div class="main__action ">
      <v-actions :wallet_data="this.$store.state.wallet" />
    </div>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue'
import vMainSlide from './components/v-main-slide.vue'
import vActions from './components/v-actions.vue'

export default {
  name: 'Main',
  components: {
    vHeader,
    vMainSlide,
    vActions
  },

  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.main {
  padding: 0px 15px;

  &__vh {
    min-height: 100vh;
  }
}
</style>
