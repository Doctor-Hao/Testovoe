<template>
  <div class="v-actions">
      <vWallet />
      <vMarket />
      <vStorage :storage_data="STORAGE" />
      <vProduction />
  </div>
</template>

<script>
import vWallet from './wallet/v-wallet.vue'
import vMarket from './market/v-market.vue'
import vStorage from './storage/v-storage.vue'
import vProduction from './production/v-production.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-actions',
  components: {
    vWallet,
    vMarket,
    vStorage,
    vProduction
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['STORAGE'])
  },
  methods: {}
}
</script>

<style lang="scss">
</style>
