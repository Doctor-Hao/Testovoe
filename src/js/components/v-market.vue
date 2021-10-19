<template>
  <div class="v-market">
    <div class="v-market__title title">
      <div class="v-market__num"><span></span></div>
      Рынок комплектующих
    </div>
    <div class="v-market__items">
      <v-market-item
        v-for="item in ITEMS"
        :key="item.id"
        :item_data="item"
        @addToStorage="addToStorage"
      />
    </div>
  </div>
</template>

<script>
import vMarketItem from './v-market-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-market',
  components: {
    vMarketItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['ITEMS'])
  },
  methods: {
    ...mapActions(['ADD_TO_STORAGE']),
    addToStorage(data) {
      this.ADD_TO_STORAGE(data)
    }
  },

}
</script>

<style lang="scss">
.v-market {
  margin: 0px 0px 100px 170px;
  @media (max-width: 1024px) {
    margin: 0px 0px 0px 100px;
  }
  @media (max-width: 767px) {
    margin: 0px 0px 0px 0px;
  }
  // .v-market__title
  &__title {
    margin: 0px 0px 80px 0px;
    @media (max-width: 767px) {
      margin: 0px 0px 50px 0px;
      display: flex;
      justify-content: center;
    }
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  // .v-market__num
  &__num {
    span {
      position: relative;
      &::before {
        content: '03';
        position: absolute;
		   font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
        width: 24px;
        height: 24px;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        color: #667380;
        letter-spacing: 0.1em;
        top: -2px;
        left: -155px;
        transform: translate(0, 70%);
        @media (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
}
</style>
