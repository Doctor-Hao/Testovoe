<template>
  <div class="v-market-item">
    <div class="v-market-item__top">
      <div class="v-market-item__image">
        <img :src="'/assets/img/market/' + item_data.image" alt="" />
      </div>
      <div class="v-market-item__label label">{{ item_data.label }}</div>
      <div class="v-market-item__text text">
        Стоимость: {{ item_data.price }} монет
      </div>
    </div>
    <div class="v-market-item__bottom">
      <vBtn @click="addToStorage" :disabled="isDisabled" />
    </div>
  </div>
</template>

<script>
import vBtn from './v-btn-market.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-market-item',
  components: { vBtn },
  props: {
    item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['DECREMENT_WALLET']),

    isDisabled: function () {
      if (this.item_data.price > this.DECREMENT_WALLET) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    addToStorage() {
      this.$emit('addToStorage', this.item_data)
    }
  },
  watch: {}
}
</script>

<style lang="scss">
.v-market-item {
  width: 236px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 80px 0px;
  @media (max-width: 1024px) {
    margin: 0px 50px 80px 0px;
  }
  @media (max-width: 767px) {
    margin: 0px 0px 50px 0px;
    justify-content: center;
  }
  // .v-market-item__top
  &__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 25px 0px;
    @media (max-width: 767px) {
      margin: 0px 0px 10px 0px;
    }
  }

  // .v-market-item__image
  &__image {
    max-width: 100px;
    height: 100px;
    align-items: center;
    margin: 0px 0px 50px 0px;
    img {
      filter: drop-shadow(0px 8px 45px #ff7f22);
      object-fit: cover;
    }
  }

  // .v-market-item__label
  &__label {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    margin: 0px 0px 10px 0px;
  }

  // .v-market-item__text
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  // .v-market-item__bottom
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__button {
    
  }
}
</style>
