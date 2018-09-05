<template>
  <div class="agence-block">
    <div class="supporting-three">
        <div v-if="buttonAgences" class="d-flex">
            <router-link class="purple-button" to="/agencias">Ver las agencias</router-link>
        </div>
        <div class="supporting-three__top-detail">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="supporting-three__top-detail-container">
                        <div class="purple-line-detail">
                        </div>
                        <div class="red-line-detail">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="supporting-three__main">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6">
                    <img src="../assets/imgs/forma_home/img_forma.png" class="supporting-three__main-image" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                    <img class="supporting-three__main-lines-detail" src="../assets/imgs/objetivo_home/bg_lines@2x.png" alt="">
                    <div class="supporting-three__text-area">
                        <p>Si eres una Agencia que ofrece Servicios Digitales, forma parte del Directorio.
                        </p>
                        <div class="d-flex">
                            <router-link class="purple-button" to="/formar-parte/form">Me interesa</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    buttonAgences: {
      type: Boolean,
      default: false
    }
  }
  
}
</script>


<style lang="scss" scoped>
.agence-block {
  /* SUPPORTING THREE */

  .supporting-three {
    display: block;
  }

  .supporting-three__top-detail {
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 62px;
    margin-bottom: -80px;
    @media (max-width: 575px) {
      position: relative;
      margin-bottom: 0;
      margin-top: 40px;
      overflow: hidden;
      float: right;
      width: 80%;
    }
  }

  .supporting-three__top-detail-container {
    width: 360px;
    display: block;
    margin: auto;
    margin-right: 0px;
  }

  .purple-line-detail {
    border-bottom: 4px solid rgb(79, 66, 144);
    height: 4px;
    width: 100%;
  }

  .red-line-detail {
    height: 24px;
    border-bottom: 4px solid rgb(248, 77, 71);
    width: 94%;
    margin: auto;
    margin-right: 0;
  }
  .supporting-three__main {
    padding-top: 220px;
    position: relative;
    bottom: 62px;
    width: 100%;
    height: auto;
    background-image: url("../assets/imgs/forma_home/bg_forma.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    @media (max-width: 575px) {
      overflow: hidden;
      padding-top: 75px;
    }
  }

  .supporting-three__main .row {
    max-width: 1160px;
    margin: 0 auto;
  }

  .supporting-three__main .supporting-three__text-area {
    position: relative;
    top: 10px;
    left: 30px;
    font-size: 42px;
    line-height: 1.6;
    max-width: 571px;
    color: rgb(74, 74, 74);
    padding: 1em 3rem 6rem 3rem;
    background-color: rgba(92, 52, 132, 0.11);
    @media (max-width: 575px) {
      font-size: 26px;
      padding: 1em 2em 6rem 1rem;
      top: 0;
      left: 10px;
    }
  }

  .supporting-three__main-lines-detail {
    position: absolute;
    width: 412px;
    right: -56px;
    top: 110px;
  }

  .supporting-three__main-image {
    width: 100%;
    position: relative;
    z-index: 2;
    @media (min-width: 750px) {
      left: 50px;
    }
  }
}
</style>

