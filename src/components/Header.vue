<template>
  <div class="header-c">
     <header>
        <div v-if="hasContent">
          <div class="header-container">
              <navbar/>
              <div class="header__text-section">
                  <div class="row">
                      <div class="col-12">
                          <div class="header-main-text">
                            <slot name="main-text"></slot>
                          </div>
                      </div>
                      <div class="col-12 col-md-8 offset-md-2">
                          <div class="header-secondary-text">
                            <slot name="secondary-text"></slot>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div v-if="hasBottomSection" class="header__bottom-menu-section">
            <div class="row">
              <slot name="bottom-section">
              </slot>
            </div>
          </div>
          <div class="header-navigation-arrow d-none d-md-block" >
              <div class="d-flex justify-content-center">
                  <div class="d-none d-md-block">
                    <a :href="anchorTag">
                      <img src="../assets/imgs/navegacion/row_down.png" alt="">
                    </a>
                  </div>
                  <div class="d-block d-md-none">
                    <a :href="anchorTag">
                      <img src="../assets/imgs/navegacion/row_down_white.png" alt="">
                    </a>
                  </div>
              </div>
          </div>
        </div>
        <div v-else>
          
        </div>
    </header> 
  </div> 

</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  props: {
    hasContent: {
      type: Boolean,
      default: true
    },
    hasBottomSection: {
      type: Boolean,
      default: false
    },
    anchorTag: {
      type: String,
      default: ''
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900");

header {
  display: block;
  width: 100%;
  height: 796px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  @media (max-width: 575.98px) {
    height: 586px;
  }

  .header {
    &-search-icon {
      margin-top: 17px;
    }
    &-hamburger-menu {
      float: right;
      margin-right: 18px;
      margin-top: 18px;
      width: 33px;
    }

    &__text-section {
      position: relative;
      /* bottom: 54px; */
    }
    &-navigation-arrow {
      position: absolute;
      top: 680px;
      width: 100vw;
      @media (max-width: 575.98px) {
        top: 480px;
      }
      @media (min-width: 575.98px) and (max-width: 991.98px) {
        top: 89vw;
      }
      img {
        display: block;
        width: 40px;
        cursor: pointer;
      }
    }
    &-main-text {
      text-align: center;
      color: white;
      font-weight: bolder;
      margin: 0px;
      width: 100%;
      & p:nth-child(1) {
        font-size: 130px;
        margin-bottom: -40px;
        @media (max-width: 575.98px) {
          font-size: 60px;
          font-weight: 600;
          margin-top: 35px;
        }
      }
      & p:nth-child(2) {
        // font-family: "Montserrat-Bold", sans-serif !important;
        font-size: 40px;
        margin-bottom: 2.5rem;
        margin-top: 1rem;
        position: relative;
        right: 7px;
        @media (max-width: 575.98px) {
          font-weight: 200;
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          font-size: 1.2em !important;
        }
      }
    }
    &-secondary-text {
      text-align: center;
      color: white;
      margin: 0px;
      font-weight: 400;
      & p:nth-child(1) {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        padding: 0 37px;
        line-height: 1.2;
        margin-bottom: 2rem;
        @media (max-width: 575.98px) {
          padding: 0 20px;
          font-size: 1.1em;
          font-weight: 400;
        }
      }
      & p:nth-child(2) {
        font-size: 20px !important;
        font-weight: 500 !important;
        padding: 0 37px;
        margin-bottom: 30px;
      }
    }

    &__bottom-menu-section {
      display: block;
      margin: 0 auto;
      max-width: 770px;
      text-align: center;
    }

    &-button {
      background-color: white;
      text-align: center;
      border-radius: 30px;
      padding: 15px 50px;
      font-weight: 500;
      font-size: 1.2em;
      color: #484b50;
      width: 50%;
      text-decoration: none;
      display: inline-block;
      margin: 0;
      &.single-button {
        @media (min-width: 575.98px) {
          width: 40%;
        }
      }
    }
    &-button:hover {
      color: #484b50;
    }

    &__bottom-or {
      color: white;
      text-align: center;
      font-weight: bolder;
      font-size: 29px;
    }
  }
  .header-subtitle{
    // color: red;
    font-size: 3em !important;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 700 !important;
  }
}
</style>


