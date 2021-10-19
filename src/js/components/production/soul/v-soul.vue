<template>
  <div class="v-soul">
    <span class="icon-soul" @click="activeSoul"
      ><span class="path1"></span><span class="path2"></span
      ><span class="path3"></span><span class="path4"></span
      ><span class="path5"></span><span class="path6"></span
      ><span class="path7"></span><span class="path8"></span
      ><span class="path9"></span><span class="path10"></span
      ><span class="path11"></span><span class="path12"></span
      ><span class="path13"></span><span class="path14"></span
      ><span class="path15"></span
    ></span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-soul',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['ACTIVE_SOUL']),

    activeSoul() {
      this.ACTIVE_SOUL()
    }
  }
}
</script>

<style lang="scss">

.icon-soul {
	cursor: pointer;
}
</style>
