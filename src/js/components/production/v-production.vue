<template>
  <div class="v-production" id="section-one">
    <div class="v-production__content">
      <div class="v-production__title title">
        <div class="v-production__num"><span></span></div>
        {{ title }}
      </div>
      <div class="v-production__constructor constructor-content">
        <div class="constructor-content__info">
          <div class="constructor-content__top">
            <div class="constructor-content__type">
              <div class="constructor-content__biorobot">
                <div class="constructor-content__choose">
                  <div class="constructor-content__label">Тип биоробота:</div>
                  <div class="constructor-content__radio">
                    <div class="radio">
                      <input
                        id="radio-1"
                        type="radio"
                        v-model="isType"
                        value="FrontEnd"
                        @change="updateCheckedType"
                      />
                      <label for="radio-1" class="radio-label">
                        <span></span> FrontEnd
                      </label>
                    </div>
                    <div class="radio">
                      <input
                        id="radio-2"
                        type="radio"
                        v-model="isType"
                        value="Design"
                        @change="updateCheckedType"
                      />
                      <label for="radio-2" class="radio-label">
                        <span></span> Design
                      </label>
                    </div>
                  </div>
                </div>
                <div class="constructor-content__choose">
                  <div class="constructor-content__label">Cтабилизатор:</div>
                  <div class="constructor-content__radio">
                    <div class="radio">
                      <input
                        id="radio-3"
                        type="radio"
                        v-model="isFloor"
                        value="Male"
                        @change="updateCheckedFloor"
                      />
                      <label for="radio-3" class="radio-label">
                        <span></span> Male</label
                      >
                    </div>
                    <div class="radio">
                      <input
                        id="radio-4"
                        type="radio"
                        v-model="isFloor"
                        value="Famale"
                        @change="updateCheckedFloor"
                      />
                      <label for="radio-4" class="radio-label">
                        <span></span> Famale</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <vDetails />
          </div>
          <div class="constructor-content__bottom">
            <vBtnBuild @click="BuildRobot" :disabledBuild="isdisabledBuild" />
            <p v-if="REQUIREMENT">
              "Для производства биоробота не хватает
              {{ REQUIREMENT_HANDS }}
              {{ REQUIREMENT_CHIPS }}
              {{ REQUIREMENT_SOUL }}
              {{ REQUIREMENT_MONEY }}"
            </p>
          </div>
        </div>
        <div class="constructor-content__image" v-if="FRONT_MALE">
          <vRobot v-if="isFrontMaleFinish" :FrontMaleFinish="true" />
          <vRobot v-else-if="isFrontMaleMiddle" :FrontMaleMiddle="true" />
          <vRobot v-else-if="isFrontMaleStart" :FrontMaleStart="true" />
        </div>
        <div class="constructor-content__image" v-if="FRONT_FAMALE">
          <vRobot v-if="isFrontFamaleFinish" :FrontFamaleFinish="true" />
          <vRobot v-else-if="isFrontFamaleMiddle" :FrontFamaleMiddle="true" />
          <vRobot v-else-if="isFrontFamaleStart" :FrontFamaleStart="true" />
        </div>
        <div class="constructor-content__image" v-if="DESIGN_MALE">
          <vRobot v-if="isDisignMaleFinish" :DisignMaleFinish="true" />
          <vRobot v-else-if="isDisignMaleMiddle" :DisignMaleMiddle="true" />
          <vRobot v-else-if="isDisignMaleStart" :DisignMaleStart="true" />
        </div>
        <div class="constructor-content__image" v-if="DESIGN_FAMALE">
          <vRobot v-if="isDisignFamaleFinish" :DisignFamaleFinish="true" />
          <vRobot v-else-if="isDisignFamaleMiddle" :DisignFamaleMiddle="true" />
          <vRobot v-else-if="isDisignFamaleStart" :DisignFamaleStart="true" />
        </div>
      </div>
    </div>
    <div class="v-production__popups">
      <vPopup v-if="IS_VISIBLE_BUILD_BTN" @closePopup="closePopup">
        <div class="v-popup__title">Биоробот произведён</div>
        <div class="v-popup__text">
          <p>Поздравляем!</p>
          <p>Вы произвели биоробота</p>
        </div>
      </vPopup>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vDetails from './v-details.vue'
import vPopup from '../popup/v-popup.vue'
import vRobot from './v-robot.vue'
import vBtn from '../btn/v-btn-market.vue'
import vBtnBuild from '../btn/v-btn-build.vue'

export default {
  name: 'v-production',
  components: {
    vDetails,
    vPopup,
    vRobot,
    vBtn,
    vBtnBuild
  },
  props: {},
  data() {
    return {
      title: ' Производство ',
      isType: 'FrontEnd',
      isFloor: 'Male',
      isVisibleBtn: false
    }
  },
  computed: {
    ...mapGetters([
      'REQUIREMENT',
      'REQUIREMENT_HANDS',
      'REQUIREMENT_CHIPS',
      'REQUIREMENT_SOUL',
      'REQUIREMENT_MONEY',

      'FRONT_MALE',
      'FRONT_FAMALE',
      'DESIGN_MALE',
      'DESIGN_FAMALE',

      'ACTIVE_HAND',
      'ACTIVE_CHIPS',
      'ACTIVE_SOUL',

      'DECREMENT_WALLET',
      'IS_VISIBLE_BUILD_BTN'
    ]),

    isFrontMaleStart: function () {
      if (this.FRONT_MALE) {
        if (
          (this.ACTIVE_HAND == 0) &
          (this.ACTIVE_CHIPS == 0) &
          (this.ACTIVE_SOUL == 0)
        ) {
          return true
        }
      }
    },
    isFrontMaleMiddle: function () {
      if (this.FRONT_MALE) {
        if (
          this.ACTIVE_HAND !== 0 ||
          this.ACTIVE_CHIPS !== 0 ||
          this.ACTIVE_SOUL !== 0
        ) {
          return true
        }
      }
    },
    isFrontMaleFinish: function () {
      if (this.FRONT_MALE) {
        if (
          (this.ACTIVE_HAND == 2) &
          (this.ACTIVE_CHIPS == 3) &
          (this.ACTIVE_SOUL == 1)
        ) {
          return true
        }
      }
    },

    isFrontFamaleStart: function () {
      if (this.FRONT_FAMALE) {
        if (
          (this.ACTIVE_HAND == 0) &
          (this.ACTIVE_CHIPS == 0) &
          (this.ACTIVE_SOUL == 0)
        ) {
          return true
        }
      }
    },
    isFrontFamaleMiddle: function () {
      if (this.FRONT_FAMALE) {
        if (
          this.ACTIVE_HAND !== 0 ||
          this.ACTIVE_CHIPS !== 0 ||
          this.ACTIVE_SOUL !== 0
        ) {
          return true
        }
      }
    },
    isFrontFamaleFinish: function () {
      if (this.FRONT_FAMALE) {
        if (
          (this.ACTIVE_HAND == 2) &
          (this.ACTIVE_CHIPS == 3) &
          (this.ACTIVE_SOUL == 1)
        ) {
          return true
        }
      }
    },

    isDisignMaleStart: function () {
      if (this.DESIGN_MALE) {
        if (
          (this.ACTIVE_HAND == 0) &
          (this.ACTIVE_CHIPS == 0) &
          (this.ACTIVE_SOUL == 0)
        ) {
          return true
        }
      }
    },
    isDisignMaleMiddle: function () {
      if (this.DESIGN_MALE) {
        if (
          this.ACTIVE_HAND !== 0 ||
          this.ACTIVE_CHIPS !== 0 ||
          this.ACTIVE_SOUL !== 0
        ) {
          return true
        }
      }
    },
    isDisignMaleFinish: function () {
      if (this.DESIGN_MALE) {
        if (
          (this.ACTIVE_HAND == 2) &
          (this.ACTIVE_CHIPS == 3) &
          (this.ACTIVE_SOUL == 1)
        ) {
          return true
        }
      }
    },

    isDisignFamaleStart: function () {
      if (this.DESIGN_FAMALE) {
        if (
          (this.ACTIVE_HAND == 0) &
          (this.ACTIVE_CHIPS == 0) &
          (this.ACTIVE_SOUL == 0)
        ) {
          return true
        }
      }
    },
    isDisignFamaleMiddle: function () {
      if (this.DESIGN_FAMALE) {
        if (
          this.ACTIVE_HAND !== 0 ||
          this.ACTIVE_CHIPS !== 0 ||
          this.ACTIVE_SOUL !== 0
        ) {
          return true
        }
      }
    },
    isDisignFamaleFinish: function () {
      if (this.DESIGN_FAMALE) {
        if (
          (this.ACTIVE_HAND == 2) &
          (this.ACTIVE_CHIPS == 3) &
          (this.ACTIVE_SOUL == 1)
        ) {
          return true
        }
      }
    },

    isdisabledBuild: function () {
      if (this.DECREMENT_WALLET > 10) {
        if (
          (this.ACTIVE_HAND == 2) &
          (this.ACTIVE_CHIPS == 3) &
          (this.ACTIVE_SOUL == 1)
        ) {
          return true
        }
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapActions([
      'UPDATE_TYPE',
      'UPDATE_FLOOR',
      'CLOSE_POPUP',
      'BUILD_ROBOT'
    ]),

    updateCheckedType(isType) {
      this.UPDATE_TYPE(this.isType)
    },
    updateCheckedFloor(isFloor) {
      this.UPDATE_FLOOR(this.isFloor)
    },

    closePopup() {
      this.CLOSE_POPUP()
    },
    BuildRobot() {
      this.BUILD_ROBOT()
    }
  }
}
</script>

<style lang="scss">
.v-production {
  margin: 0px 0px 100px 170px;
  @media (max-width: 1024px) {
    margin: 0px 0px 50px 100px;
  }
  @media (max-width: 767px) {
    margin: 0px 0px 50px 0px;
  }
  // .v-production__title
  &__title {
    margin: 0px 0px 60px 0px;
    @media (max-width: 767px) {
      margin: 0px 0px 0px 0px;
      display: flex;
      justify-content: center;
    }
  }

  // .v-production__num
  &__num {
    span {
      position: relative;
      &::before {
        content: '05';
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

$urlSprites: '../../../assets/img/sprite/sprites.png';

.constructor-content {
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  &__radio {
    display: flex;
    @media (max-width: 767px) {
      justify-content: space-between;
      align-items: center;
      margin: 0px 0px 30px 0px;
    }
  }

  &__info {
    margin: 0px 30px 0px 0px;

    @media (max-width: 1024px) {
      margin: 0px 10px 0px 0px;
    }
  }

  &__image {
  }
  // .constructor-content__top
  &__top {
    display: flex;
    margin: 0px 0px 50px 0px;

    @media (max-width: 1024px) {
      display: block;
      margin: 0px 0px 10px 0px;
    }
  }

  // .constructor-content__type
  &__type {
    margin: 0px 20px;
  }

  // .constructor-content__biorobot
  &__biorobot {
  }

  &__choose {
  }

  &__label {
    font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin: 0px 0px 20px 0px;
  }

  // .constructor-content__stabilizer
  &__stabilizer {
  }

  // .constructor-content__details
  &__details {
    display: flex;
    flex-direction: column;
  }

  // .constructor-content__bottom
  &__bottom {
    display: flex;
    align-items: center;

    P {
      font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
      max-width: 200px;
      font-weight: 500;
      font-size: 12px;
      line-height: 133%;
      color: #a3b8cc;
    }
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }

  &__button {
    margin: 0px 15px 0px 0px;
    @media (max-width: 1024px) {
      margin: 20px 0px 0px 0px;
    }
  }
}

.btn {
  max-width: 300px;
  white-space: nowrap;
}

$color1: rgba(163, 184, 204, 1);
$color2: rgba(255, 127, 34, 1);
.radio {
  margin: 0px 30px 30px 0px;
  width: 100px;
  @media (max-width: 767px) {
    &:last-child {
      margin: 0px 0px 30px 0px;
    }
  }
  input[type='radio'] {
    position: absolute;
    opacity: 0;

    + .radio-label {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      &:before {
        content: '';
        border-radius: 100%;
        border: 2px solid darken($color1, 25%);
        display: inline-block;
        width: 24px;
        height: 24px;
        position: relative;
        top: -0.2em;
        margin: 0px 10px 0px 0px;
        vertical-align: top;
        cursor: pointer;
      }
    }
    &:checked {
      + .radio-label {
        position: relative;
        span {
          position: absolute;
          &:before {
            content: '';
            border-radius: 100%;
            background-color: $color2;
            display: inline-block;
            width: 16px;
            height: 16px;
            position: relative;
            top: 1px;
            left: 0;
            transform: translate(-188%, 5%);
          }
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: $color2;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          border-color: darken($color1, 25%);
          background: darken($color1, 25%);
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}

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

.sprite-Icon-meh {
  width: 48px;
  height: 48px;
  background-position: -1031px -5px;
}

.sprite-Icon-meh-1 {
  width: 48px;
  height: 48px;
  background-position: -989px -63px;
  cursor: pointer;
}

.sprite-Icon-meh-2 {
  width: 48px;
  height: 48px;
  background-position: -989px -121px;
  cursor: pointer;
}

.sprite-Subtract-active {
  width: 48px;
  height: 48px;
  background-position: -989px -179px;
  cursor: pointer;
}

.sprite-Subtract-not-have {
  width: 48px;
  height: 48px;
  background-position: -989px -295px;
}
</style>
