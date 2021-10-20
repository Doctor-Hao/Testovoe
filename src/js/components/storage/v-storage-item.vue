<template>
  <div class="v-storage-item">
    <div class="v-storage-item__top">
      <div class="v-storage-item__label label">
        {{ storage_item_data.label }}
      </div>
      <div class="v-storage-item__text text">
        Стоимость: {{ storage_item_data.sell }} монет
      </div>
      <div class="v-storage-item__count label">
        {{ storage_item_data.quantity }} шт
      </div>
    </div>
    <div class="v-storage-item__bottom">
      <vBtn @click="decrementItem" :disabled="isDisabled" />
    </div>
  </div>
</template>

<script>
import vBtn from '../btn/v-btn-storage.vue'

export default {
  name: 'v-storage-item',
  props: {
    storage_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    vBtn
  },
  data() {
    return {}
  },
  computed: {
    isDisabled: function () {
      if (this.storage_item_data.quantity > 0) {
        return true
      } else {
			return false
		}
    }
  },
  methods: {
    decrementItem() {
      this.$emit('decrement')
    }
  },
  mounted() {
    this.$set(this.storage_item_data, 'quantity', 0)
  }
}
</script>

<style lang="scss">
.v-storage-item {
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
  // .v-storage-item__top
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

  // .v-storage-item__label
  &__label {
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    margin: 0px 0px 10px 0px;
  }

  // .v-storage-item__text
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 0px 0px 15px 0px;
  }

  // .v-storage-item__count
  &__count {
    line-height: 24px;
  }

  // .v-storage-item__bottom
  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // .v-storage-item__button
  &__button {
  }
}
</style>
