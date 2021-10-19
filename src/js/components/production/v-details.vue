<template>
  <div class="v-details">
    <div class="v-details__hands">
      <div class="v-details__card" v-for="i in ACTIVE_HAND">
        <vActivateHand />
      </div>
      <div class="v-details__card" v-for="i in HANDS">
        <vHand />
      </div>
      <div class="v-details__card" v-for="i in NOT_HAVE_HANDS">
        <vNotHand />
      </div>
    </div>
    <div class="v-details__chips">
      <div class="v-details__card" v-for="i in ACTIVE_CHIPS">
        <vActivateChip />
      </div>
      <div class="v-details__card" v-for="i in CHIPS">
        <vChip />
      </div>
      <div class="v-details__card" v-for="i in NOT_HAVE_CHIPS">
        <vNotChip />
      </div>
    </div>
    <div class="v-details__souls">
      <div class="v-details__card" v-for="i in ACTIVE_SOUL">
        <vActivateSoul />
      </div>
      <div class="v-details__card" v-for="i in SOUL">
        <vSoul />
      </div>
      <div class="v-details__card" v-for="i in NOT_HAVE_SOUL">
        <vNotSoul />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import vNotHand from './hand/v-not-hand.vue'
import vHand from './hand/v-hand.vue'
import vActivateHand from './hand/v-activate-hand.vue'

import vNotChip from './chip/v-not-chip.vue'
import vChip from './chip/v-chip.vue'
import vActivateChip from './chip/v-activate-chip.vue'

import vSoul from './soul/v-soul.vue'
import vNotSoul from './soul/v-not-soul.vue'
import vActivateSoul from './soul/v-activate-soul.vue'

export default {
  name: 'v-details',
  components: {
    vNotHand,
    vHand,
    vActivateHand,

    vNotChip,
    vChip,
    vActivateChip,

    vSoul,
    vNotSoul,
    vActivateSoul
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'NOT_HAVE_HANDS',
      'HANDS',
      'ACTIVE_HAND',

      'NOT_HAVE_CHIPS',
      'CHIPS',
      'ACTIVE_CHIPS',

      'NOT_HAVE_SOUL',
      'SOUL',
      'ACTIVE_SOUL'
    ])
  },
  methods: {}
}
</script>

<style lang="scss">
.v-details {
  width: 230px;
  overflow: hidden;
  @media (max-width: 767px) {
    margin: 0px auto;
  }
  // .v-details__hand
  &__hand {
  }

  // .v-details__chip
  &__chip {
  }

  // .v-details__soul
  &__soul {
    img {
      color: #ffffff;
    }
  }

  &__hands {
    display: flex;
  }

  &__chips {
    display: flex;
  }

  &__souls {
    display: flex;
    max-width: 50px;
    overflow: hidden;
  }
}

$urlSprites: '../../../assets/img/sprite/sprites.png';
.sprite {
  background-image: url($urlSprites);
  background-repeat: no-repeat;
  display: block;
  width: 48px;
  height: 48px;
  margin: 0px 10px 15px 0px;
  z-index: 2;
}

.sprite-Designer-Famale-1 {
  width: 236px;
  height: 320px;
  background-position: -5px -5px;
}

.sprite-Designer-Famale-2 {
  width: 236px;
  height: 320px;
  background-position: -251px -5px;
}

.sprite-Designer-Famale-3 {
  width: 236px;
  height: 320px;
  background-position: -497px -5px;
}

.sprite-Designer-Male-1 {
  width: 236px;
  height: 320px;
  background-position: -743px -5px;
}

.sprite-Designer-Male-2 {
  width: 236px;
  height: 320px;
  background-position: -5px -335px;
}

.sprite-Designer-Male-3 {
  width: 236px;
  height: 320px;
  background-position: -251px -335px;
}

.sprite-Front-Famale-1 {
  width: 236px;
  height: 320px;
  background-position: -497px -335px;
}

.sprite-Front-Famale-2 {
  width: 236px;
  height: 320px;
  background-position: -743px -335px;
}

.sprite-Front-Famale-3 {
  width: 236px;
  height: 320px;
  background-position: -5px -665px;
}

.sprite-Front-Male-1 {
  width: 236px;
  height: 320px;
  background-position: -251px -665px;
}

.sprite-Front-Male-2 {
  width: 236px;
  height: 320px;
  background-position: -497px -665px;
}

.sprite-Front-Male-3 {
  width: 236px;
  height: 320px;
  background-position: -743px -665px;
}

.sprite-Group-18 {
  width: 32px;
  height: 32px;
  background-position: -989px -5px;
  cursor: pointer;
}
</style>
