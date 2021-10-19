<template>
  <div class="v-robot">
    <div class="v-robot__image" :class="typeRobot"></div>
  </div>
</template>

<script>
export default {
  name: 'v-robot',
  components: {},
  props: {
    FrontMaleStart: {
      type: Boolean,
      default: false
    },
    FrontMaleMiddle: {
      type: Boolean,
      default: false
    },
    FrontMaleFinish: {
      type: Boolean,
      default: false
    },

    FrontFamaleStart: {
      type: Boolean,
      default: false
    },
    FrontFamaleMiddle: {
      type: Boolean,
      default: false
    },
    FrontFamaleFinish: {
      type: Boolean,
      default: false
    },

    DisignMaleStart: {
      type: Boolean,
      default: false
    },
    DisignMaleMiddle: {
      type: Boolean,
      default: false
    },
    DisignMaleFinish: {
      type: Boolean,
      default: false
    },

    DisignFamaleStart: {
      type: Boolean,
      default: false
    },
    DisignFamaleMiddle: {
      type: Boolean,
      default: false
    },
    DisignFamaleFinish: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    typeRobot() {
      return {
        'sprite-Front-Male-1': this.FrontMaleStart,
        'sprite-Front-Male-2': this.FrontMaleMiddle,
        'sprite-Front-Male-3': this.FrontMaleFinish,

        'sprite-Front-Famale-1': this.FrontFamaleStart,
        'sprite-Front-Famale-2': this.FrontFamaleMiddle,
        'sprite-Front-Famale-3': this.FrontFamaleFinish,

        'sprite-Designer-Male-1': this.DisignMaleStart,
        'sprite-Designer-Male-2': this.DisignMaleMiddle,
        'sprite-Designer-Male-3': this.DisignMaleFinish,

        'sprite-Designer-Famale-1': this.DisignFamaleStart,
        'sprite-Designer-Famale-2': this.DisignFamaleMiddle,
        'sprite-Designer-Famale-3': this.DisignFamaleFinish
      }
    }
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss">
$urlSprites: '../../../assets/img/sprite/sprites.png';
.v-robot {
  // .v-robot__image
  &__image {
    width: 236px;
    height: 320px;
    background-image: url($urlSprites);
    background-repeat: no-repeat;
    display: block;

    background-position: -5px -335px;

    img {
      width: 100%;
    }
  }
}
</style>
