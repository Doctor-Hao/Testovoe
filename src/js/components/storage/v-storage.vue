<template>
  <div class="v-storage">
    <div class="v-storage__title title">
      <div class="v-storage__num"><span></span></div>
      Склад
    </div>
    <div class="v-storage__items">
      <v-storage-item
        v-for="(item, index) in storage_data"
        :key="item.id"
        :storage_item_data="item"
        @decrement="decrement(index)"
      />
    </div>
  </div>
</template>

<script>
import vStorageItem from './v-storage-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'v-storage',
  components: {
    vStorageItem
  },
  props: {
    storage_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
    ...mapActions([ 'DECREMENT_STORAGE_ITEM']),

    decrement(index) {
      this.DECREMENT_STORAGE_ITEM(index)
    }
  },

}
</script>

<style lang="scss">
.v-storage {
  margin: 0px 0px 100px 170px;

  @media (max-width: 1024px) {
    margin: 0px 0px 0px 100px;
  }
  @media (max-width: 767px) {
    margin: 0px 0px 0px 0px;
  }
  // .v-storage__title
  &__title {
    margin: 0px 0px 60px 0px;
    @media (max-width: 767px) {
      margin: 0px 0px 30px 0px;
      display: flex;
      justify-content: center;
    }
  }

  // .v-storage__num
  &__num {
    span {
      position: relative;
      &::before {
        content: '04';
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

  // .v-storage__items
  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      justify-content: center;
    }
  }
}
</style>
