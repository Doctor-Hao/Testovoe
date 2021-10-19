<template>
  <div class="v-not-soul">
    <span class="icon-soul"
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
export default {
  name: 'v-not-soul',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.v-not-soul {
  pointer-events: none;
}

.icon-soul .path1:before {
  content: '\e900';
  color: rgb(51, 57, 64);
}
$color: #4c5865;
.path2:before {
  content: '\e901';
  color: $color;
}
.path3:before {
  content: '\e902';
  color: $color;
}
.path4:before {
  content: '\e903';
  color: $color;
}
.path5:before {
  content: '\e904';
  color: $color;
}
.path6:before {
  content: '\e905';
  color: $color;
}
.path7:before {
  content: '\e906';
  color: $color;
}
.path8:before {
  content: '\e907';
  color: $color;
}
.path9:before {
  content: '\e908';
  color: $color;
}
.path10:before {
  content: '\e909';
  color: $color;
}
.path11:before {
  content: '\e90a';
  color: $color;
}
.path12:before {
  content: '\e90b';
  color: $color;
}
.path13:before {
  content: '\e90c';
  color: $color;
}
.path14:before {
  content: '\e90d';
  color: $color;
}
.path15:before {
  content: '\e90e';
  color: $color;
}
</style>
