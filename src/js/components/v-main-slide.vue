<template>
  <div class="v-main-slide">
    <div class="v-main-slide__info">
      <div class="v-main-slide__title">
        <div class="v-main-slide__num num"><span></span></div>
        Фабрика по производству биороботов
      </div>
      <div class="v-main-slide__text text">класса «монитор-кресло»</div>
    </div>
    <div class="v-main-slide__image">
      <img
        class="v-main-slide__img"
        src="/assets/img/main-slide/main-slide.png"
        alt=""
      />
    </div>
    <div class="v-main-slide__scroll"><span>скролл</span></div>
  </div>
</template>

<script>
export default {
  name: 'v-main-slide',

  methods: {}
}
</script>

<style lang="scss">
.v-main-slide {
  display: flex;
  justify-content: start;
  position: relative;
  &__num {
	  
    span {
      position: relative;
      &::before {
        content: '01';
        position: absolute;
        font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;

        width: 24px;
        height: 24px;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        color: #667380;
        letter-spacing: 0.1em;
        top: 3px;
        left: -155px;
        transform: translate(0, 70%);
        @media (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  &__scroll {
    position: absolute;
    color: #667380;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    bottom: 20%;
    left: -8px;
    transform: rotate(-90deg);
    font-family: 'Montserrat-Medium', Helvetica, Arial, sans-serif;
    font-weight: 500;
    span {
      position: relative;
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;

      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 16.5px;
        background-image: url('../../assets/img/main-slide/arrow.png');
        transform: rotate(90deg);
        bottom: 1%;
        left: -40%;
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  // .v-main-slide__info
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 10px 0px 170px;
    @media (max-width: 1024px) {
      margin: 0px 30px 0px 100px;
    }
    @media (max-width: 767px) {
      margin: 0px 0px 0px 0px;
    }
  }

  // .v-main-slide__title
  &__title {
    font-family: 'Montserrat-SemiBold', Helvetica, Arial, sans-serif;
    font-weight: 600;

    max-width: 470px;
    font-size: 56px;
    line-height: 72px;
    margin: 0px auto;
    @media (max-width: 1024px) {
      font-size: calc(28px + 20 * ((100vw - 320px) / (1920 - 320)));
      line-height: 133%;
    }
    @media (max-width: 767px) {
      text-align: center;
      max-width: 500px;
      margin: 36px 0px 60px 0px;
    }
  }

  // .v-main-slide__text
  &__text {
    font-family: 'MontserratSemiBold', Helvetica, Arial, sans-serif;
    font-weight: 600;

    margin: 25px 0px 0px 0px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  // .v-main-slide__image
  &__image {
  }

  // .v-main-slide__img
  &__img {
    @media (max-width: 1024px) {
      margin: 0px 30px 0px 0px;
      max-width: 236px;
      max-height: 206px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 767px) {
      margin: 0px 0px 0px 0px;
    }
  }
}
</style>
