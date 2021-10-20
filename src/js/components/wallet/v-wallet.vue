<template>
  <div class="v-wallet">
    <div class="v-wallet__content">
      <div class="v-wallet__title title">
        <div class="v-wallet__num"><span></span></div>
        Кошелёк криптовалют
      </div>
      <div class="v-wallet__monets monets">
        <div class="monets__coins">
          <div class="monets__coin" v-for="i in DECREMENT_WALLET">
            <vCoin />
          </div>
        </div>
        <div class="monets__info">
          <strong >{{ DECREMENT_WALLET }}</strong>
          {{ monet }} biorobo
        </div>
      </div>
      <div class="v-wallet__action">
        <div class="v-wallet__button" @click="updateCount">Нацыганить</div>
        <div class="v-wallet__checkbox">
          <label class="v-wallet__checkbox checkbox">
            <div class="squaredThree">
              <input
                data-error="Ошибка"
                type="checkbox"
                value="None"
                id="squaredThree"
                name="check"
                v-model="checkedCheckbox"
              />
              <label for="squaredThree"></label>
            </div>
            <span class="checkbox__text">
              <span> Цыганить по 5 монет</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="v-wallet__popups">
      <vPopup v-if="IS_VISIBLE_LIMIT" @closePopup="closePopup">
        <div class="v-popup__title coin">Количество монет ограничено</div>
        <div class="v-popup__text">
          Вы не можете нацыганить более 100 монет biorobo
        </div>
      </vPopup>
    </div>
  </div>
</template>

<script>
import vCoin from './v-coin.vue'
import vPopup from '../popup/v-popup.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'v-wallet',
  components: {
    vCoin,
    vPopup
  },
  props: {},
  data() {
    return {
      n: 5,
      checkedCheckbox: false,
      cases: [],
      monet: 'монет'
    }
  },
  computed: {
    ...mapGetters(['DECREMENT_WALLET', 'IS_VISIBLE_LIMIT'])
  },
  methods: {
    ...mapActions(['UPDATE_COUNT_WALLET', 'CLOSE_POPUP']),

    updateCount(checkedCheckbox) {
      if (this.checkedCheckbox) {
        this.UPDATE_COUNT_WALLET(checkedCheckbox)
      } else {
        this.UPDATE_COUNT_WALLET()
      }
    },

    closePopup() {
      this.CLOSE_POPUP()
    },
  }
}
</script>

<style lang="scss">
.v-wallet {
  &__content {
    margin: 0px 10px 100px 170px;

    @media (max-width: 1024px) {
      margin: 0px 0px 70px 100px;
    }
    @media (max-width: 767px) {
      margin: 0px 0px 50px 0px;
    }
  }

  &__popups {
  }

  &__num {
    span {
      position: relative;
      &::before {
        content: '02';
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
  // .v-wallet__title
  &__title {
    margin: 0px 0px 60px 0px;
    @media (max-width: 767px) {
      margin: 0px 0px 40px 0px;
    }
  }

  // .v-wallet__monets
  &__monets {
  }

  // .v-wallet__action
  &__action {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  // .v-wallet__button
  &__button {
    margin: 0px 20px 0px 0px;
    color: #ff7f22;
	 font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.3s ease 0s;
    border-bottom: 1px solid #ff7f22;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: #da6818;
      border-bottom: 1px solid #da6818;
    }

    &:active {
      color: #ff7f22;
    }

    @media (max-width: 767px) {
      margin: 0px 0px 20px 0px;
    }
  }

  // .v-wallet__checkbox
  &__checkbox {
  }
}

.monets {
  // .monetst__coins
  &__coins {
    max-width: 767px;
    @media (max-width: 767px) {
      margin: 0px 15px 0px 0px;
    }
  }
  // .monets__coin
  &__coin {
    position: relative;
    display: inline-flex;

    margin: 0px 0px 0px 5px;
    img {
      position: absolute;
    }
  }

  // .monets__info
  &__info {
    margin: 0px 0px 40px 0px;
    padding: 50px 0px 0px 0px;
    font-size: 24px;
    line-height: 24px;
    color: #a3b8cc;
    span {
      font-weight: bold;
    }
  }
}
</style>
