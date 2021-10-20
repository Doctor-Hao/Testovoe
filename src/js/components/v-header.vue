<template>
  <div class="v-header">
    <div class="v-header__logo">
      <img
        class="v-header__image"
        src="/assets/img/header/header_logo.png"
        alt=""
      />
      <span></span>
    </div>
    <div class="v-header__buttons">
      <button
        type="submit"
        class="center-main__button btn longbnt"
        v-scroll-to="'#section-one'"
      >
        Произвести биоробота
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 50px 0px 140px 0px;
  @media (max-width: 767px) {
    margin: 40px 0px 70px 0px;
    justify-content: center;
  }
  // .v-header__logo
  &__logo {
    position: relative;
    max-width: 48px;
    max-height: 48px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &::before {
      content: '';
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #ff7f22;
      top: 0;
      right: 0;
      transform: translate(100%, 220%);
    }
    &::after {
      content: '';
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #ff7f22;
      top: 0;
      right: 0;
      transform: translate(250%, 220%);
    }
    span {
      &::after {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #ff7f22;
        top: 0;
        right: 0;
        transform: translate(400%, 220%);
      }
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  // .v-header__image
  &__image {
  }

  // .v-header__buttons
  &__buttons {

    &:hover {
      background: #ff5722;
		border-radius: 50px;
		transition: all 0.3s ease 0s;
    }

    &:active {
      background: #ff7f22;
    }
  }
}

.center-main {
  // .center-main__button
  &__button {
  }
}
</style>
